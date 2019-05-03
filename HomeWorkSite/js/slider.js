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
		left = left - 800;
 		sliderMove.style.left = left+'px';

 		if (left == -3200) {
			sliderMove.style.left = 0+'px';
			left = 0;
			fourthDot.style.background = 'none';
			firstDot.style.backgroundColor = 'cyan';
		}		
		if (left == -800) {
			firstDot.style.background = 'none';
			secondDot.style.backgroundColor = 'cyan';
		} if (left == -1600) {
			secondDot.style.background = 'none';
			thirdDot.style.backgroundColor = 'cyan';
		} if (left == -2400) {
			thirdDot.style.background = 'none';
			fourthDot.style.backgroundColor = 'cyan';
		} 
	};	

	slideMoveLeft.onclick = function () {
		left = left + 800;
 		sliderMove.style.left = left+'px';

 		if (left == 800) {
			sliderMove.style.left = -2400+'px';
			left = -2400;
			firstDot.style.background = 'none';
			fourthDot.style.backgroundColor = 'cyan';
		} if (left == -1600) {
			fourthDot.style.background = 'none';
			thirdDot.style.backgroundColor = 'cyan';
		} if (left == -800) {
			thirdDot.style.background = 'none';
			secondDot.style.backgroundColor = 'cyan';
		} if (left == -0) {
			secondDot.style.background = 'none';
			firstDot.style.backgroundColor = 'cyan';
		}

	};



};



