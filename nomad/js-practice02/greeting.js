const loginForm = document.querySelector("#login-form");
const greetingWrap = document.querySelector("#greeting");
const logoutBtn = document.querySelector(".logout-btn");

const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onLogoutClick() {
  greetingWrap.classList.add(CLASSNAME_HIDDEN);
  localStorage.removeItem(KEY_USERNAME);
  loginForm.classList.remove(CLASSNAME_HIDDEN);
}

logoutBtn.addEventListener("click", onLogoutClick);

function onLoginSubmit(e) {
  e.preventDefault();
  const loginInput = document.querySelector("#login-form input");
  const username = loginInput.value;
  loginInput.value = "";
  loginForm.classList.add(CLASSNAME_HIDDEN);
  localStorage.setItem(KEY_USERNAME, username);
  paintUsername(username);
}

function paintUsername(e) {
  const greeting = document.querySelector("#greeting h1");
  greetingWrap.classList.remove(CLASSNAME_HIDDEN);
  greeting.innerText = `Hello ${e}`;
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername) {
  paintUsername(savedUsername);
} else {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
}
