const userProfile = document.querySelector(".user-component__title");
const USERNAME_KEY = "username";

const profileName = localStorage.getItem(USERNAME_KEY);

userProfile.innerText = profileName;