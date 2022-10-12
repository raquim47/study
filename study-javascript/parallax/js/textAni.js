// 글자 쪼개기
// let text = document.querySelector('.content__item__desc');

// let split = text.innerText.split('').join('</span><span>');
// split = '<span>' + split + '</span>';

// text.innerHTML = split;

// 글자 쪼개기 반복문
document.querySelectorAll('.split').forEach(el => {
  let text = el.innerText;
  // * 접근성
  // aria-hidden='true' 
  // aria-label 
  let split = text.split('').join('</span><span aria-hidden="true">');
  split = '<span aria-hidden="true">' + split + '</span>';
  el.innerHTML = split;
  el.setAttribute('aria-label', text);
});

// 스크롤 이펙트

window.addEventListener('scroll', () => {
  let scrollTop = window.pageXOffset || window.scrollY;

  // document.querySelectorAll('.content__item').forEach(item => {
  //   if (scrollTop > item.offsetTop - window.innerHeight / 2) {
  //     item.querySelectorAll('.content__item__desc span').forEach((el, i) => {
  //       setTimeout(() => {
  //         el.classList.add('show');
  //       }, 50 * i + 1);
  //     });
  //   } else {
  //     item.querySelectorAll('.content__item__desc span').forEach(el => {
  //       el.classList.remove('show');
  //     });
  //   };
  // })

  //gsap 버전
  document.querySelectorAll('.content__item').forEach((el, i) => {
    if (scrollTop > el.offsetTop) {
      gsap.to(el.querySelectorAll('.split span'), {
        // css에 기본값이 설정 되어야함
        opacity: 1,
        duration: 0.5,
        y:0,
        stagger: 0.05,
        ease: 'power4.out',
        rotation:0
      });
    } else {
      gsap.to(el.querySelectorAll('.split span'), {
        opacity: 0
      });
    }
  });
});