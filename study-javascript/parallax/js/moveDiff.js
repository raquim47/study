function scrollProgress(){
  let scrollTop = window.pageYOffset || window.scrollY;

  document.querySelectorAll('.content__item').forEach(item => {
    let offset = (scrollTop - item.offsetTop);
    item.querySelector('.content__item__img').style.transform = 'translateX('+ offset* 0.05 +'px)';
    item.querySelector('.content__item__desc').style.transform = 'translateX('+ -offset* 0.2+'px)';
    item.querySelector('.content__item__num').style.transform = 'translateX('+ -offset* 0.2+'px)';
  });
}

window.addEventListener('scroll', scrollProgress);