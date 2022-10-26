const logOut = document.querySelector("#logOutButton");

const USERNAME_KEY = "username";

logOut.addEventListener('submit', logOutClicked);

function logOutClicked() {
    localStorage.removeItem(USERNAME_KEY);
}
