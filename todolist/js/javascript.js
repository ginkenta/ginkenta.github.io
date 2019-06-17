var doc=document;
var inputTask=doc.getElementById('inputTask');
var buttonAdd=doc.getElementById('buttonAdd');
var taskList=doc.getElementById('taskList');

var buttonFilterText = doc.querySelector('button.blockFilter__loop');
var textForSort=doc.querySelector('input.blockFilter__input');

var filterByDate = doc.getElementById('blockFilter__date');
var counterForFilterDate=0;
var arrayForSort = [];
var idnexArray=0;

var taskImporrtant=doc.getElementById('taskImporrtant');
var counterForFilterImportant=0;

var optionsForDate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

function createNewElem(task) {
	var listItem=doc.createElement('li');
	listItem.className='taskList__item';

	var dateInf=doc.createElement('div');
	dateInf.className='taskList__data';

	var date=doc.createElement('p');
	date.className='taskList__data dateNow';

	var dateToday= new Date();
	var formatDateToday = new Date(dateToday.getFullYear(),dateToday.getMonth(),dateToday.getDate(), dateToday.getHours()+3, dateToday.getMinutes());
	var moreformatDateToday = formatDateToday.toISOString("ru",optionsForDate);
	var dateWhithoutT = moreformatDateToday.split('T').join('\n');
	var dateWhithoutLast = dateWhithoutT.split(':00.000Z').join('');

	date.innerHTML = dateWhithoutLast;

	var infImportant=doc.createElement('div');
	infImportant.className='taskList__important';
	var numImportant=1;
	infImportant.innerText=numImportant;
	
	var taskInf=doc.createElement('div');
	taskInf.className='taskList__task';
	
	var buttonImportant=doc.createElement('div');
	buttonImportant.className='buttonImportant';
	buttonImportant.innerHTML='<button class="buttonImportant__up">&#9650;</button><button class="buttonImportant__down">&#9660;</button>';
	
	var taskText=doc.createElement('label');
	taskText.className='taskList__text';
	taskText.innerText=task;
	
	var functButton=doc.createElement('div');
	functButton.className='functionButton';
	functButton.innerHTML='<button class="functionButton__edit functionButtonCirkle"><i><img src="img/pencil.png"></i></button><button class="functionButton__done functionButtonCirkle"><i><img src="img/checked.png"></i></button><button class="functionButton__remove functionButtonCirkle"><i><img src="img/delete.png"></i>';

	dateInf.appendChild(date);

	taskInf.appendChild(buttonImportant);
	taskInf.appendChild(taskText);
	taskInf.appendChild(functButton);

	listItem.appendChild(dateInf);
	listItem.appendChild(infImportant);
	listItem.appendChild(taskInf);

	return listItem;
}

function addTask() {	
	if (inputTask.value) {
		var pleaseAdd=doc.getElementById('noTask');
		var listItem=createNewElem(inputTask.value);

		taskList.prepend(listItem);
		inputTask.value="";

		arrayForSort.push({indexOfLi:idnexArray,someLi:listItem});
		importantEditRemove(listItem);
		idnexArray++;

		console.log(arrayForSort);
		console.dir(listItem);
		if (arrayForSort.length) pleaseAdd.style.display='none';
	}
}

buttonFilterText.onclick=filterByText;

function filterByText(){
	var textValue=textForSort.value;
	// var taskTextValue=
	console.log(textValue);
	// var arraySortedByText=arrayForSort.someLi.filter(function(s){
	// 	return ~s.indexOf(textValue);
	// });
	// console.log(arraySortedByText);

	var arrayForSort = arrayForSort.filter(function(s){
		return s.someLi.field.value.includes('j');});
	console.log(arrayForSort);

	// for (var i = 0; i < arrayForSort.length; i++) {
	// 	taskList.prepend(arrayForSort[i].someLi);
	// }

	// arrayForSort.sort(function(a,b){
	// 	var textA=a.
	// });
}

function renderList(_list=[],el=document.body){
  _list.forEach(i=>{
    let new_el = document.createElement('li')
    new_el.innerHTML=i
    el.appendChild(new_el)
  })
}

function filterArrByDate(){

	if (arrayForSort.length>1) {
		if (counterForFilterDate>1) {
			counterForFilterDate=0;
		}
		if (counterForFilterDate) {
			//if click 1 time on button filter
			arrayForSort.sort(function(a,b){
				return a.indexOfLi - b.indexOfLi;
			});

			taskList.innerHTML="";
			for (var i = 0; i < arrayForSort.length; i++) {
				taskList.prepend(arrayForSort[i].someLi);
			}
			//***********************
		}
		else {
			//if click 1++ time on button filter
			arrayForSort.sort(function(a,b){
				return b.indexOfLi - a.indexOfLi;
			});

			taskList.innerHTML="";
			for (var i = 0; i < arrayForSort.length; i++) {
				taskList.prepend(arrayForSort[i].someLi);
			}
			//***********************
		}
		counterForFilterDate++;
	}	
}

//check after make up imporant via button
function filterArrByImportant(){
	if (arrayForSort.length>1) {
		if (counterForFilterImportant>1) {
			counterForFilterImportant=0;
		}

		if (counterForFilterImportant) {
			var liItem = doc.querySelectorAll('.taskList__item');
			arrayForSort.sort(function(a, b) {
			// using ~~ to cast the value to a number instead of a string
			a = Number(a.someLi.children[1].innerHTML);
			b = Number(b.someLi.children[1].innerHTML);
			return b - a;
			});
			taskList.innerHTML="";
			for (var i = 0; i < arrayForSort.length; i++) {
				taskList.prepend(arrayForSort[i].someLi);
			}
		} else {
			var liItem = doc.querySelectorAll('.taskList__item');
		 
			arrayForSort.sort(function(a, b) {
			// using ~~ to cast the value to a number instead of a string
			a = Number(a.someLi.children[1].innerHTML);
			b = Number(b.someLi.children[1].innerHTML);
			return a - b;
			});
			taskList.innerHTML="";
			for (var i = 0; i < arrayForSort.length; i++) {
				taskList.prepend(arrayForSort[i].someLi);
			}
		}
		counterForFilterImportant++;
		console.log(counterForFilterImportant);
	}
}

buttonAdd.onclick=addTask;

blockFilter__date.onclick=filterArrByDate;

taskImporrtant.onclick=filterArrByImportant;

function upImportantFunc(){
	var liTextImportant=this.parentNode.parentNode.previousElementSibling;
	var liNumImportant=~~liTextImportant.innerHTML;
	liTextImportant.innerHTML=liNumImportant+1;
}

function downImportantFunc(){
	var liTextImportant=this.parentNode.parentNode.previousElementSibling;
	var liNumImportant=~~liTextImportant.innerHTML;
	if (liNumImportant>1) {liTextImportant.innerHTML=liNumImportant-1;}
}

function editTask(){
	var listItem = this.parentNode.previousElementSibling.lastChild;
	console.dir(listItem);
	// console.log(this);
	var editForm = doc.querySelector('.additionalFunction__edit');
	editForm.style.display='flex';
	var buttonEditNo = doc.querySelector('button.editButton__cansel');
	var buttonEditYes = doc.querySelector('button.editButton__save');

	buttonEditNo.onclick=function(){
		editForm.style.display='none';
	}
	buttonEditYes.onclick=function(){
		var textForEdit = doc.querySelector('textarea.textEdit');
		if (textForEdit.value) {
			listItem.textContent = textForEdit.value;
			textForEdit.value="";
			editForm.style.display='none';
		}
	}
}

function doneTask(){
	var buttonBg = this;
	var listItem = this.parentNode.previousElementSibling.lastChild.parentNode;
	var listItemPreviuosBg = listItem.style.backgroundColor;
	// console.dir(listItem);
	// console.log(bgButtonCheck);
	listItem.style.backgroundColor="rgba(0, 151, 244,.3)";
	buttonBg.style.backgroundColor="rgba(0, 151, 244,.25)";

}

function removeTask(){
	var listItem = this.parentNode.parentNode.parentNode;
	var taskList = listItem.parentNode;
	console.log(listItem);
	console.log(this);
	var deleteForm = doc.querySelector('.additionalFunction__remove');
	deleteForm.style.display='flex';
	var buttonDeleteNo = doc.querySelector('button.removeButton__no');
	var buttonDeleteYes = doc.querySelector('button.removeButton__yes');

	buttonDeleteNo.onclick=function(){
		deleteForm.style.display='none';
	}
	buttonDeleteYes.onclick=function(){
		console.log('12');
		taskList.innerHTML='';
		for (let i = 0; i < arrayForSort.length; i++) {
			if (arrayForSort[i].someLi === listItem) {
				arrayForSort.splice(i,1);		
			} 
		}
		for (var i = 0; i < arrayForSort.length; i++) {
			taskList.prepend(arrayForSort[i].someLi);
		}
		deleteForm.style.display='none';
		if (arrayForSort.length==0) taskList.innerHTML='<h1 id="noTask">PLEASE ADD TASKs</h1>';
	}

}

function importantEditRemove(listItem){
	var liUpImportant = listItem.querySelector('button.buttonImportant__up');
	var liDownImportant = listItem.querySelector('button.buttonImportant__down');
	var liTextImportant = listItem.querySelector('taskList__important');
	var listEdit=listItem.querySelector('button.functionButton__edit');
	var listDone=listItem.querySelector('button.functionButton__done');
	var listRemove=listItem.querySelector('button.functionButton__remove');

	
	liUpImportant.onclick=upImportantFunc;
	liDownImportant.onclick=downImportantFunc;
	listEdit.onclick=editTask;
	listDone.onclick=doneTask;
	listRemove.onclick=removeTask;
}	


