const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('.login-input');
const greetingWrap = document.querySelector('#greeting');
const greeting = document.querySelector('#greeting h1');
const logoutBtn = document.querySelector('.logout-btn');

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  this.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(KEY_USERNAME, username);
  paintUsername(username);
}

function onLogoutClick(){
  greetingWrap.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(KEY_USERNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

function paintUsername(username) {
  greeting.innerText = `Hello ${username}`;
  greetingWrap.classList.remove(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener('click', onLogoutClick);

if (savedUsername) {
  paintUsername(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}




