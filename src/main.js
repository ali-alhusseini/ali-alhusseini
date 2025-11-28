import './style.css'
import './projects.js'
import './i18n.js'

const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

// small nav frosted glass on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 24) nav.classList.add('nav-frost', 'shadow');
  else nav.classList.remove('nav-frost', 'shadow');
});

// reveal on scroll (intersection observer)
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// mobile menu
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.getElementById('nav-links');
const navBtnLinks = document.querySelectorAll('.nav-btn');

menuBtn.style.transition = 'transform 0.2s ease-in-out';
closeBtn.style.transition = 'transform 0.2s ease-in-out';

navBtnLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    navLinks.classList.add('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  closeBtn.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  navLinks.classList.add('hidden');
});

menuBtn.addEventListener('click', () => {
  closeBtn.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  navLinks.classList.remove('hidden');
});


// // Switch Sound
// const switchAudio = document.getElementById('switch-audio');
// const lightModeBtn = document.getElementById('light-mode-btn');

// function playSwitchSound() {
//     switchAudio.volume = 0.2;
//     // Use play() which returns a promise
//     var playPromise = switchAudio.play();
//     if (playPromise !== undefined) {
//         playPromise.catch(function(error) {
//             // Auto-play was prevented, silently handle
//             console.log('Audio play prevented:', error);
//         });
//     }
// }

// lightModeBtn.addEventListener('click', () => {
//     playSwitchSound();
// });