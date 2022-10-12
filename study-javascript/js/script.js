document.querySelectorAll(".sample").forEach((el) => {
  el.querySelector("h3").addEventListener("click", () => {
    el.classList.toggle("active");
  });
});

document.querySelectorAll(".result").forEach((el) => {
  el.querySelector("h4").addEventListener("click", () => {
    el.classList.toggle("active");
  })
});