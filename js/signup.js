const mainElement = document.getElementById("main-content");
const usernameElement = document.getElementById("username");
const usernameWarningElement = document.getElementById("username-warning");
const passwordElement = document.getElementById("password");
const passwordWarningElement = document.getElementById("password-warning");
const signupInputElement = document.getElementById("signup");
const inputWarningElement = document.getElementById("input-warning");

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.onload = async () => { 
    mainElement.classList.add("fade-in");
    await wait(4000);
    mainElement.classList.remove("hidden");
};


signupInputElement.addEventListener("click", async () => { 
    usernameWarningElement.classList.add("hidden"); 
    passwordWarningElement.classList.add("hidden"); 
    inputWarningElement.classList.add("hidden");
    invalid = false;
    if(!usernameElement.value || usernameElement.value == "") { 
        usernameElement.classList.add("fade-in");
        usernameElement.placeholder = "invalid email";
        usernameWarningElement.classList.remove("hidden"); 
        usernameWarningElement.classList.add("fade-in");
        inputWarningElement.classList.remove("hidden");
        inputWarningElement.classList.add("fade-in"); 
        invalid = true;
    } 
    if(!passwordElement.value || passwordElement.value == "") {  
        passwordElement.classList.add("fade-in");
        passwordElement.placeholder = "too short";
        passwordWarningElement.classList.remove("hidden"); 
        passwordWarningElement.classList.add("fade-in");
        inputWarningElement.classList.remove("hidden");
        inputWarningElement.classList.add("fade-in"); 
        invalid = true;
    }
    await wait(2000); 
    if(invalid) {
        inputWarningElement.classList.remove("fade-in")
        usernameElement.classList.remove("fade-in"); 
        passwordElement.classList.remove("fade-in");
        return;
    }
})