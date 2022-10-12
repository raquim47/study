// 1. 폼 submit, 새로 고침 제어(submit했을때의 기본 동작)
const loginForm = document.getElementById('login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

// function onLoginSubmit(e){
//   e.preventDefault();
//   console.log(e);
// }
function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
  // const username = loginInput.value;
  // console.log(username);

  // if (username === "") {
  //   alert('Please write your name');
  // } else if (username.length > 15) {
  //   alert('Your name is too long.');
  // }
  // 위 조건문은 required, maxlength="15" 등으로 브라우저에서 기본제공되는 기능으로 대체 가능;
}

// loginButton.addEventListener('click', onLoginBtnClick);
loginForm.addEventListener('submit', onLoginSubmit);

// 2. a 링크 제어

const link = document.querySelector('a');

function handleLinkClick(e) {
  e.preventDefault();
  alert('clicked'); // alert는 자바스크립트의 모든 동작을 멈춤
}
link.addEventListener('click', handleLinkClick);

// 3.
const loginForm2 = document.querySelector('#login-form2');
const loginInput2 = document.querySelector('.name-input2');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용


// function onLoginSubmit2(e) {
//   e.preventDefault();
//   loginForm2.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput2.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   loginForm2.classList.remove(HIDDEN_CLASSNAME);
//   loginForm2.addEventListener('submit', onLoginSubmit2);
// } else {
//   paintGreetings(savedUsername);
// }

// 유저정보를 두 번 찾지만 간결하게

function onLoginSubmit2(e) {
  e.preventDefault();
  loginForm2.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput2.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm2.classList.remove(HIDDEN_CLASSNAME);
  loginForm2.addEventListener('submit', onLoginSubmit2);
} else {
  paintGreetings();
}
// localstorage 브라우저에 뭔가를 저장할 때