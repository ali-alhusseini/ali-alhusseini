document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('cursor');
    var xPosition = event.clientX - cursor.offsetWidth / 2;
    var yPosition = event.clientY - cursor.offsetHeight / 2;
    cursor.style.left = xPosition + 'px';
    cursor.style.top = yPosition + 'px';
});

const lightModeBtn = document.getElementById('light-mode-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

lightModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkModeBtn.style.display = 'block';
    lightModeBtn.style.display = 'none';
});

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkModeBtn.style.display = 'none';
    lightModeBtn.style.display = 'block';
});