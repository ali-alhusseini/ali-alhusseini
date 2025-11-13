// Cursor 
document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector('.cursor');
    var initCursor = false;
    var mouseX = 0;
    var mouseY = 0;
    var cursorX = 0;
    var cursorY = 0;

    // Use event delegation for link hover effects instead of individual listeners
    document.addEventListener("mouseover", function(e) {
        if (e.target.closest("a")) {
            cursor.classList.add("cursor-link");
        }
    });
    
    document.addEventListener("mouseout", function(e) {
        if (e.target.closest("a")) {
            cursor.classList.remove("cursor-link");
        }
    });

    // Store mouse position without updating DOM
    window.onmousemove = function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!initCursor) {
            cursor.style.opacity = 1;
            initCursor = true;
        }
    }

    // Use requestAnimationFrame for smooth cursor movement
    function updateCursor() {
        cursorX = mouseX;
        cursorY = mouseY;
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
        requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    window.onmousedown = function(e) {
        cursor.style.opacity = 0;
        initCursor = false;
    }
});

// Switch Sound
function playSwitchSound() {
    switchAudio.volume = 0.2;
    // Use play() which returns a promise
    var playPromise = switchAudio.play();
    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            // Auto-play was prevented, silently handle
            console.log('Audio play prevented:', error);
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
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    document.getElementById('time').innerHTML = "Time: " + time;
}

updateTime();
setInterval(updateTime, 1000);

// About/Connect
let aboutLink = document.getElementById('about-link');
let connectLink = document.getElementById('connect-link');
let projectsLink = document.getElementById('projects-link');
let aboutContainer = document.querySelector(".about-container");
let connectContainer = document.querySelector(".connect-container");
let projectsContainer = document.querySelector(".projects-container");
let rightContainer = document.querySelector('.right-container');
let closeButtons = document.querySelectorAll('.close-container');

window.onload = () => {
    if (aboutContainer) aboutContainer.style.display = 'none';
    if (connectContainer) connectContainer.style.display = 'none';
    if (projectsContainer) projectsContainer.style.display = 'none';
}

function openConnectContainer() {
    if (connectContainer) connectContainer.style.display = 'block';
    if (aboutContainer) aboutContainer.style.display = 'none';
    if (projectsContainer) projectsContainer.style.display = 'none';
    if (rightContainer) rightContainer.style.display = 'none';
}

function showRightContainer() {
    if (rightContainer) rightContainer.style.display = '';
}

function hideRightContainer() {
    if (rightContainer) rightContainer.style.display = 'none';
}

if (aboutLink && aboutContainer) {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (aboutContainer.style.display == 'none' || aboutContainer.style.display === '') {
            aboutContainer.style.display = 'block';
            if (connectContainer) connectContainer.style.display = 'none';
            if (projectsContainer) projectsContainer.style.display = 'none';
            hideRightContainer();
        } else {
            aboutContainer.style.display = 'none';
            showRightContainer();
        }
    });
}

if (connectLink && connectContainer) {
    connectLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (connectContainer.style.display == 'none' || connectContainer.style.display === '') {
            openConnectContainer();
        } else {
            connectContainer.style.display = 'none';
            showRightContainer();
        }
    });
}

if (projectsLink && projectsContainer) {
    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (projectsContainer.style.display == 'none' || projectsContainer.style.display === '') {
            projectsContainer.style.display = 'block';
            if (aboutContainer) aboutContainer.style.display = 'none';
            if (connectContainer) connectContainer.style.display = 'none';
            hideRightContainer();
        } else {
            projectsContainer.style.display = 'none';
            showRightContainer();
        }
    });
}

// close (×) buttons inside the info containers
if (closeButtons && closeButtons.length > 0) {
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // find the parent info-container and hide it
            const container = button.closest('.info-container');
            if (container) container.style.display = 'none';
            showRightContainer();
        });
    });
}