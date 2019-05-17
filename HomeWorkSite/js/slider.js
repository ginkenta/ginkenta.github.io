window.onload = function() {
   
	var doc = document;

	var slideMoveLeft = doc.getElementById("sliderButton__Left");
	var slideMoveRight = doc.getElementById("sliderButton__Right");
	var sliderMove = doc.getElementById("sliderMove");
	var firstDot = doc.getElementById('firstDot');
	var secoundDot = doc.getElementById('secondDot');
	var thirdDot = doc.getElementById('thirdDot');
	var fourthDot = doc.getElementById('fourthDot');
	var dotsBgHide = new Array(doc.getElementsByClassName('sliderPoint__cirkle'));
	var left = 0;
	firstDot.style.backgroundColor = 'cyan';

 	slideMoveRight.onclick = function () {
		left = left - 100;
 		sliderMove.style.left = left+'%';

 		if (left == -400) {
			sliderMove.style.left = 0+'%';
			left = 0;
			fourthDot.style.background = 'none';
			firstDot.style.backgroundColor = 'cyan';
		}		
		if (left == -100) {
			firstDot.style.background = 'none';
			secondDot.style.backgroundColor = 'cyan';
		} if (left == -200) {
			secondDot.style.background = 'none';
			thirdDot.style.backgroundColor = 'cyan';
		} if (left == -300) {
			thirdDot.style.background = 'none';
			fourthDot.style.backgroundColor = 'cyan';
		} 
	};	

	slideMoveLeft.onclick = function () {
		left = left + 100;
 		sliderMove.style.left = left+'%';

 		if (left == 100) {
			sliderMove.style.left = -300+'%';
			left = -300;
			firstDot.style.background = 'none';
			fourthDot.style.backgroundColor = 'cyan';
		} if (left == -200) {
			fourthDot.style.background = 'none';
			thirdDot.style.backgroundColor = 'cyan';
		} if (left == -100) {
			thirdDot.style.background = 'none';
			secondDot.style.backgroundColor = 'cyan';
		} if (left == -0) {
			secondDot.style.background = 'none';
			firstDot.style.backgroundColor = 'cyan';
		}

	};



};



