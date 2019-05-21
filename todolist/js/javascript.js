var doc=document;
var inputTask=doc.getElementById('inputTask');
var buttonAdd=doc.getElementById('buttonAdd');
var taskList=doc.getElementById('taskList');
var numImportant=1;

function createNewElem(task) {
	var listItem=doc.createElement('li');
	listItem.className='taskList__item';
	
	var dateInf=doc.createElement('div');
	dateInf.className='taskList__data';

	var date=doc.createElement('p');
	date.className='date';
	var hours=doc.createElement('p');
	hours.className='hours';

	var dateToday= new Date();
	var currDate = dateToday.getDate();
	var currMonth = dateToday.getMonth() + 1;
	var currYear = dateToday.getFullYear();
	var currHour = dateToday.getHours();
	var currMinute = dateToday.getMinutes();

	date.innerHTML=currDate+'.'+currMonth+'.'+currYear;
	hours.innerText=currHour+':'+currMinute;

	var infImportant=doc.createElement('div');
	infImportant.innerText=numImportant;
	infImportant.className='taskList__important';
	
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
	dateInf.appendChild(hours);

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
		var listItem=createNewElem(inputTask.value);
		taskList.appendChild(listItem);
		inputTask.value="";
	}
}
buttonAdd.onclick=addTask;