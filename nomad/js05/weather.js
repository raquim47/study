const API_KEY = "d3d6d7fbb7e1ca3885f36a37d35c2e00";
// API 에러뜰 경우 계정 이메일 승인이 안됐을듯

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:nth-child(1)');
    const city = document.querySelector('#weather span:nth-child(2)');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition는 succec함수와 error함수 필요