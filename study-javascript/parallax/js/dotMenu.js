document.querySelectorAll('#parallax__dot ul li a').forEach( el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function(){
  let scrollTop = window.pageYOffset || window.scrollY || this.document.documentElement.scrollTop;

  document.querySelectorAll('.content__item').forEach((item, i) => {
    if(scrollTop >= item.offsetTop - 5){
      document.querySelectorAll('#parallax__dot ul li').forEach( el => {
        el.classList.remove('active');
      });
      document.querySelector(`#parallax__dot ul li:nth-child(${i+1})`).classList.add('active');
    }
  });
});