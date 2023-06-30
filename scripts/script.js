document.addEventListener('mousemove', function(event) {
    var cursor = document.getElementById('cursor');
    var xPos = event.clientX - cursor.offsetWidth / 2;
    var yPos = event.clientY - cursor.offsetHeight / 2;
    cursor.style.left = xPos + 'px';
    cursor.style.top = yPos + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
  const modeSwitch = document.getElementById('modeSwitch');
  modeSwitch.addEventListener('click', (event) => {
      event.preventDefault();
      if (document.body.style.backgroundColor = "midnightblue") {
          document.body.style.backgroundColor = "orangered";
          document.body.style.color = "midnightblue";
      } else { 
          document.body.style.backgroundColor = "mdinightblue";
          document.body.style.color = "orangered";
      }
  });
});