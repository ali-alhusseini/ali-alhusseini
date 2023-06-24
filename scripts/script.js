document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('cursor');
    var xPos = event.clientX - cursor.offsetWidth / 2;
    var yPos = event.clientY - cursor.offsetHeight / 2;
    cursor.style.left = xPos + 'px';
    cursor.style.top = yPos + 'px';
});

const mode = document.getElementById("mode-switch");
mode.addEventListener("click", changeMode);

function changeMode() {
  console.log("change mode");
}