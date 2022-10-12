function scroll(){
  let scrollTop = window.pageYOffset;

  document.querySelectorAll('#contentsShow .content__item').forEach(item =>{
    if(scrollTop >= item.offsetTop - (window.innerHeight/2)){
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
  requestAnimationFrame(scroll);
}

scroll();
