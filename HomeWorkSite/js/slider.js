window.onload = function() {

  let doc = document;

  let slideMoveLeft = doc.getElementById("sliderButton__Left");
  let slideMoveRight = doc.getElementById("sliderButton__Right");
  let sliderMove = doc.getElementById("sliderMove");
  let arrayOfDot = doc.getElementsByClassName("sliderPoint__cirkle");
  let slideNow = 0;
  blueDot();


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
    arrayOfDot[slideNow].classList.toggle("sliderPoint-blue");
  }
};
