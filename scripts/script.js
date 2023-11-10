const switchAudio = document.getElementById('switch-audio');
const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

// document.addEventListener('mousemove', function(event) {
//     var cursor = document.getElementById('cursor');
//     var xPosition = event.clientX - cursor.offsetWidth / 2;
//     var yPosition = event.clientY - cursor.offsetHeight / 2;
//     cursor.style.left = xPosition + 'px';
//     cursor.style.top = yPosition + 'px';
// });

// Custom Cursor 
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

lightModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkModeBtn.style.display = 'inline-block';
    lightModeBtn.style.display = 'none';
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    lightModeBtn.style.display = 'inline-block';
    darkModeBtn.style.display = 'none';
});

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

lightModeBtn.addEventListener('click', () => {
    playSwitchSound();
});

darkModeBtn.addEventListener('click', () => {
    playSwitchSound();
});

function updateTime() {
    const date = Date();
    let time = date.slice(16, 24);
    document.getElementById('time').innerHTML = "Time: " + time;
}

updateTime();
setInterval(updateTime, 1000);


const aboutLink = document.querySelector(".about-link a");
const connectLink = document.querySelector(".connect-link a");
const aboutContainer = document.querySelector(".about-container");
const connectContainer = document.querySelector(".connect-container");

aboutLink.addEventListener('click', () => {
    if (aboutContainer.style.display == 'none') {
        aboutContainer.style.display = 'block';
        connectContainer.style.display = 'none';
        // document.querySelector(".strings").style.display = 'none';
    } else {
        aboutContainer.style.display = 'none';
        // document.querySelector(".strings").style.display = 'block';
    }
});

connectLink.addEventListener('click', () => {
    if (connectContainer.style.display == 'none') {
        connectContainer.style.display = 'block';
        aboutContainer.style.display = 'none';
        // document.querySelector(".strings").style.display = 'none';
    } else {
        connectContainer.style.display = 'none';
        // document.querySelector(".strings").style.display = 'block';
    }
});

const aboutCloseBtn = document.querySelector(".about-close-btn");
const connectCloseBtn = document.querySelector(".connect-close-btn");

aboutCloseBtn.addEventListener('click', () => {
    aboutContainer.style.display = 'none';
    // document.querySelector(".strings").style.display = 'block';
});

connectCloseBtn.addEventListener('click', () => {
    connectContainer.style.display = 'none';
    // document.querySelector(".strings").style.display = 'block';
});

document.getElementById('get-in-touch-link').addEventListener('click', function(event) {
    event.preventDefault();
    connectLink.click();
});
