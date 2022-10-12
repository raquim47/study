// # 버튼 클릭
document.querySelectorAll('#parallax__nav ul li a').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 스크롤 했을때
window.addEventListener('scroll', function () {
  // pageXOffset 윈도우의 스크롤탑 값(현재 세로 위치)
  // 스크롤 탑 구하는 세 가지 방법
  let scrollTop = window.pageYOffset || window.scrollY || this.document.documentElement.scrollTop;

  // 버튼 active일때 색 바꾸기
  document.querySelectorAll('.content__item').forEach((item, i) => {
    if (scrollTop >= item.offsetTop - 5) {
      document.querySelectorAll('#parallax__nav ul li').forEach(el => {
        el.classList.remove('active');
      });
      document.querySelector(`#parallax__nav ul li:nth-child(${i+1})`).classList.add('active');
    }
  })
});