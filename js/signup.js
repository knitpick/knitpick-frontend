const mainElement = document.getElementById("main-content");
const usernameElement = document.getElementById("username");
const usernameWarningElement = document.getElementById("username-warning");
const passwordElement = document.getElementById("password");
const passwordWarningElement = document.getElementById("password-warning");
const signupInputElement = document.getElementById("signup");
const usernameInputWarningElement = document.getElementById("username-input-warning");
const passwordInputWarningElement = document.getElementById("password-input-warning");
const inputWarningElement = document.getElementById("input-warning");

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.onload = async () => { 
    mainElement.classList.add("fade-in");
    await wait(4000);
    mainElement.classList.remove("hidden");
};


signupInputElement.addEventListener("click", async () => { 
    if(!usernameElement.value || usernameElement.value == "") {
        usernameInvalid = true;
        usernameWarningElement.classList.remove("hidden"); 
        inputWarningElement.classList.remove("hidden");
        return;
    } 
    if(!passwordElement.value || passwordElement.value == "") {
        passwordInvalid = true;
        passwordWarningElement.classList.remove("hidden"); 
        inputWarningElement.classList.remove("hidden");
        return;
    }
})