const parallaxCont = document.getElementById('parallax__cont');

function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  document.querySelector(".scrollTop span").innerText = scrollTop;

  //4번째 색션에 왔을때 스크롤탑을 0으로 초기화해서 시작
  // 스크롤높이 - 섹션 4의offsetTop
  let offset4 = scrollTop - parallaxCont.querySelector('#section4').offsetTop;
  if (scrollTop >= parallaxCont.querySelector('#section4').offsetTop) {
    // 섹션4안의 가로로 긴 .sec4를 이동
    gsap.to('.sec4', {
      // 0부터 시작되는 값을 음수로
      left: -offset4,
      ease: 'linear'
    });
  } 
  // else {
  //   parallaxCont.querySelector("#section4 .sec4").style.backgroundColor = "red";
  // }

  //7번째 색션에 왔을때 스크롤탑을 0으로 초기화해서 시작
  let offset7 = scrollTop - parallaxCont.querySelector("#section7").offsetTop;
  if(scrollTop>=parallaxCont.querySelector('#section7').offsetTop){
    gsap.to('.sec7', {
      left: -offset7,
      ease: 'linear'
    });
  }

  requestAnimationFrame(scroll);
}

scroll();