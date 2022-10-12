

//기본 크기 세팅
//패럴럭스 박스 전체 가로 값
// const parallaxWidth = parallaxCont.offsetWidth;
//body에 높이값에  ->  패럴럭스 박스 전체 가로 값
// document.body.style.height = parallaxWidth * height/width+ "px";

// const height = document.getElementById("section9").offsetHeight;
// const width = document.getElementById("section9").offsetWidth;
// const prop = height/width
// console.log(height);
// console.log(width);
// console.log(prop);


// 컨테이너 전체
const parallaxCont = document.getElementById("parallax__cont");
// 개별 섹션
const contentItem = document.querySelector(".content__item")

//스크롤 했을 때 left: scrollTop
function scroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelector(".scrollTop span").innerText = scrollTop;

  //기본 크기 셋팅
  let parallaxWidth = parallaxCont.offsetWidth;
  
  document.body.style.height = parallaxWidth + "px";

  //섹션 박스
  let viewWidth = parallaxWidth - window.innerWidth;
  let viewHeight = parallaxWidth - window.innerHeight;
  let goLeft = scrollTop * (viewWidth / viewHeight);

  gsap.to(parallaxCont, {
    left: -goLeft
  });
  // gsap.to(parallaxCont, {left: -scrollTop * width/height});
  requestAnimationFrame(scroll)
}
scroll();

window.addEventListener("resize", scroll);