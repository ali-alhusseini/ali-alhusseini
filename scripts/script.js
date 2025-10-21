// Cursor 
document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector('.cursor');
    var links = document.querySelectorAll("a");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
        var selfLink = links[i];
    
        selfLink.addEventListener("mouseover", function() {
          cursor.classList.add("cursor-link");
        });
        selfLink.addEventListener("mouseout", function() {
          cursor.classList.remove("cursor-link");
        });
      }

    window.onmousemove = function(e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
            cursor.style.opacity = 1;
            initCursor = true;
        }

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    }

    window.onmousedown = function(e) {
        cursor.style.opacity = 0;
        initCursor = false;
    }
});

// Switch Sound
function playSwitchSound() {
    if (switchAudio.readyState === 4) {
        switchAudio.volume = 0.2;
        switchAudio.play();
    } else {
        switchAudio.addEventListener('canplaythrough', () => {
            switchAudio.volume = 0.2;
            switchAudio.play();
        });
    }
}

// Dark/Light Mode
const switchAudio = document.getElementById('switch-audio');
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

lightModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkModeBtn.style.display = 'inline-block';
    lightModeBtn.style.display = 'none';
    playSwitchSound();
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    lightModeBtn.style.display = 'inline-block';
    darkModeBtn.style.display = 'none';
    playSwitchSound();
});

// Header Time
function updateTime() {
    const date = Date();
    let time = date.slice(16, 24);
    document.getElementById('time').innerHTML = "Time: " + time;
}

updateTime();
setInterval(updateTime, 1000);

// About/Connect
let aboutLink = document.getElementById('about-link');
let connectLink = document.getElementById('connect-link');
let blogLink = document.getElementById('blog-link');
let projectsLink = document.getElementById('projects-link');
let aboutContainer = document.querySelector(".about-container");
let connectContainer = document.querySelector(".connect-container");
let projectsContainer = document.querySelector(".projects-container");

window.onload = () => {
    aboutContainer.style.display = 'none';
    connectContainer.style.display = 'none';
    projectsContainer.style.display = 'none';
}

function openConnectContainer() {
    connectContainer.style.display = 'block';
    aboutContainer.style.display = 'none';
    projectsContainer.style.display = 'none';
}

aboutLink.addEventListener('click', () => {
    if (aboutContainer.style.display == 'none') {
        aboutContainer.style.display = 'block';
        connectContainer.style.display = 'none';
        projectsContainer.style.display = 'none';
    } else {
        aboutContainer.style.display = 'none';
    }
});

connectLink.addEventListener('click', () => {
    if (connectContainer.style.display == 'none') {
        openConnectContainer();
    } else {
        connectContainer.style.display = 'none';
    }
});

projectsLink.addEventListener('click', () => {
    if (projectsContainer.style.display == 'none') {
        projectsContainer.style.display = 'block';
        aboutContainer.style.display = 'none';
        connectContainer.style.display = 'none';
    } else {
        projectsContainer.style.display = 'none';
    }
});