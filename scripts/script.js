document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('cursor');
    var xPos = event.clientX - cursor.offsetWidth / 2;
    var yPos = event.clientY - cursor.offsetHeight / 2;
    cursor.style.left = xPos + 'px';
    cursor.style.top = yPos + 'px';
});

const mode = document.getElementById("modeSwitch");
mode.addEventListener("click", function(event) {
  event.preventDefault();
  changeMode();
});

function changeMode() {
  console.log("change mode in progress");
}