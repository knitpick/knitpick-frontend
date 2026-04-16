const mainElement = document.getElementById("main-content");

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.onload = async () => { 
    mainElement.classList.add("fade-in");
    await wait(4000);
    mainElement.classList.remove("hidden");
};