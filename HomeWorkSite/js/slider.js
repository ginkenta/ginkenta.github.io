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

  function blueDot() {
     for(let r = 0; r < arrayOfDot.length; r++){
       arrayOfDot[r].classList.remove("sliderPoint-blue");
     }
     arrayOfDot[slideNow].classList.add("sliderPoint-blue");
  }

  function moveSlideWithDot(){
    for(let r=0; r<arrayOfDot.length; r++){
      arrayOfDot[r].onclick = () => {
        slideNow = r;
        moveSlide();
      }
    }
  }
};
