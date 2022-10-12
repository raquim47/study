window.addEventListener('scroll', function (){
  let scrollTop = window.pageYOffset || window.scrollY || this.document.documentElement.scrollTop;

  // # 현재 위치값 보이기
  document.querySelector('.scrollTop span').innerHTML = parseInt(scrollTop);
  //각 섹션 offset 값
  document.querySelectorAll('.scrollInfo span').forEach((item, i) => {
    item.innerHTML = document.querySelector(`#section${i+1}`).offsetTop;
  });
});