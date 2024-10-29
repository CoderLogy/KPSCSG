// script.js
const app = document.getElementById("typewriter-text");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .pauseFor(2000)
    .typeString("Kwantlen Park Secondary Computer Science and Gaming Club")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Now fiscally sponsored by HackClub.")
    .pauseFor(1500)
    .deleteAll()
    .typeString("Website Now Under Development !")
    .pauseFor(1500)
    .start();
