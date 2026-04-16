const screenElement = document.getElementById("screen");
const headerElement = document.getElementById("header");
const mainElement = document.getElementById("main");

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

screenElement.addEventListener("click", async () => { 
    screenElement.classList.remove("hidden");
    screenElement.classList.remove("selectable");
    screenElement.classList.remove("screen-animations");
    screenElement.classList.add("expand-screen"); 
    let counter = 0;
    let displayLength = 1;
    let message = "knitpick";
    for(let cursor = 0; cursor < message.length * 2; cursor++) {
        await wait(120 + (cursor * 2));
        let noise = "";
        for(let letterCursor = counter; letterCursor < displayLength; letterCursor++)
            noise += String.fromCharCode(Math.random() * 26 + 97);
        if(displayLength < message.length)
            displayLength++;
        else if(counter < message.length - 1)
            counter++;
        headerElement.innerHTML = `<span class="letter-gradient">${message.slice(0, counter)}${noise}</span>`;
    }
    await wait(128);
    headerElement.innerHTML = `<header class="landing-header"><span class="letter-gradient">${message}</span></header>`; 
    await wait(2000);
    headerElement.querySelector("header").classList.add("fade-out");
    await wait(2000); 
    message = "automated, reliable code reviews.";
    headerElement.innerHTML = `<header class="landing-header fade-in"><span class="landing-contents">${message}</span></header>`;
    await wait(2800);
    headerElement.classList.add("fade-out");
    mainElement.classList.add("fade-out");
    await wait(2000);
    window.location.href = "pages/home.html"; 
})