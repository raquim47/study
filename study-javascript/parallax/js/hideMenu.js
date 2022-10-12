// 버튼 이동
document.querySelectorAll('#parallax__menu li a').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    document.querySelectorAll('#parallax__menu li').forEach( el => {
      el.classList.remove('active');
    })
    el.parentElement.classList.add('active');
  });
});

// 위로 스크롤 하면 메뉴 나타나고
// 아래 스크롤 하면 메뉴 숨기기

let nowScrollTop;
let lastScrollTop = 0;

function hasScroll(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  if(scrollTop > lastScrollTop){
    document.querySelector('#parallax__menu').classList.add('hide');
  } else {
    document.querySelector('#parallax__menu').classList.remove('hide');
  }

  lastScrollTop = scrollTop;
};

function scrollProgress(){
  nowScrollTop = true;

  setInterval(() => {
    if(nowScrollTop){
      nowScrollTop = false;
      hasScroll();
    }
  }, 300);
};

window.addEventListener('scroll', scrollProgress);
