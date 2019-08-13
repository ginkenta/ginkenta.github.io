window.onload = function() {

  let doc = document;

  let slideMoveLeft = doc.getElementById("sliderButton__Left");
  let slideMoveRight = doc.getElementById("sliderButton__Right");
  let sliderMove = doc.getElementById("sliderMove");
  let arrayOfDot = doc.getElementsByClassName("sliderPoint__cirkle");
  let slideNow = 0;
  blueDot();
  moveSlideWithDot();


  slideMoveRight.onclick = () => {
    blueDot()
    slideNow++;
    moveSlide();
  };
  slideMoveLeft.onclick = () => {
    blueDot()
    slideNow--;
    moveSlide();
  };

  function moveSlide() {
    (slideNow > 3) ? slideNow = 0:
      (slideNow < 0) ? slideNow = 3 : slideNow;
    sliderMove.style.left = "-" + slideNow * 100 + '%';
    blueDot();
  }

  function blueDot() {
    for (let r = 0; r < arrayOfDot.length; r++) {
      arrayOfDot[r].classList.remove("sliderPoint-blue");
    }
    arrayOfDot[slideNow].classList.add("sliderPoint-blue");
  }

  function moveSlideWithDot() {
    for (let r = 0; r < arrayOfDot.length; r++) {
      arrayOfDot[r].onclick = () => {
        slideNow = r;
        moveSlide();
      }
    }
  }

  // Function for swiping slider
  function mouseClickDownFunc(eventDown) {
    let oldPosX = eventDown.pageX;
    sliderMove.onmouseup = function(eventUp) {
      let newPosX = eventUp.pageX;
      let moveSlideSwipe = newPosX - oldPosX;
      (moveSlideSwipe < -20) ? slideNow++ :
      (moveSlideSwipe > 20) ? slideNow-- : false;
      moveSlide();
      console.log('new position: ' + newPosX);
      console.log(newPosX - oldPosX);
    }
    console.log('old position' + oldPosX);
  }
  sliderMove.addEventListener('mousedown', mouseClickDownFunc);

};
