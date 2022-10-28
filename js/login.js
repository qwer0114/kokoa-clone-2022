const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#username");
const password = document.querySelector("#password");
const requiredName = document.querySelector(".Name-required");
const requiredPW = document.querySelector(".PW_required");

const USERNAME_KEY = "username";
const HIDE = "hide";

loginForm.addEventListener('submit', requiredPassword);
loginForm.addEventListener('submit', requiredUserName);
loginForm.addEventListener('submit', saveUserName);

function saveUserName() {
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
}

function requiredUserName(event) {
    if (loginInput.value == "") {
        requiredName.innerText = "Please Write your name";
        event.preventDefault();
    } else {
        requiredName.innerText = "";
    }
}

function requiredPassword(event) {
    if (password.value == "") {
        requiredPW.innerText = "Please Write your password";
        event.preventDefault();
    } else {
        requiredPW.innerText = "";
    }
}
