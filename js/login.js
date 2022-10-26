const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#username");
const userProfile = document.querySelector(".user-component__title");

const USERNAME_KEY = "username";
const profileName = localStorage.getItem(USERNAME_KEY);


if (localStorage.getItem(USERNAME_KEY) == null) {
    loginForm.addEventListener('submit', saveUserName);

} else {
    paintUserName(profileName);
}


function paintUserName(profileName) {
    userProfile.innerText = profileName;
}

function saveUserName() {
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

}
