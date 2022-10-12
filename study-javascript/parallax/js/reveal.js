// 글씨 span에 넣어서 감추기
document.querySelectorAll(".content__item__desc.reveal").forEach(el => {
  if (!el.querySelector('span')) {
    const text = el.innerText;
    el.innerHTML = `<span>${text}</span>`;
  }
});

const scrollReveal = function () {
  const reveal = document.querySelectorAll('.reveal');
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  reveal.forEach(el => {
    let revealOffset = el.offsetTop + el.parentElement.offsetTop;
    let revealDelay = el.dataset.delay;

    if (scrollTop >= revealOffset - window.innerHeight / 2) {
      el.classList.add('show');
    }

    // if (scrollTop >= revealOffset - window.innerHeight / 2) {
    //   if (revealDelay == undefined) {
    //     elem.classList.add("show");
    //   } else {
    //     setTimeout(() => {
    //       elem.classList.add("show");
    //     }, revealDelay);
    //   }
    // }
  });
};

window.addEventListener('scroll', scrollReveal);