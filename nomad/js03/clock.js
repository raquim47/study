const clock = document.querySelector('h2#clock');

// interval 매번 일어나는 무언가

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 사이트가 로드되자마자 getClock을 한 번 실행하고 또 매초마다 다시 실행
getClock();
setInterval(getClock, 1000);

// padStart 
// padStart(x, 'y') 를 사용하면 된다.
// padStart는 내가 갖고 있는 string 을 길게 만들어 주고 싶을 때 사용.
// 뒤에서 추가하고 싶을 때는 padEnd를 사용하면 된다.
// x는 원하는 length를, y는 앞에 채워줄 내용을 입력하면 된다.