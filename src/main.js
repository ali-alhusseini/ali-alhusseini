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
const navLinks = document.querySelector('.nav-links');

menuBtn.style.transition = 'transform 0.2s ease-in-out';
menuBtn.addEventListener('mouseover', () => {
  menuBtn.style.transform = 'scale(1.1)';
});
menuBtn.addEventListener('mouseout', () => {
  menuBtn.style.transform = 'scale(1)';
});

closeBtn.style.transition = 'transform 0.2s ease-in-out';
closeBtn.addEventListener('mouseover', () => {
  closeBtn.style.transform = 'scale(1.1)';
});
closeBtn.addEventListener('mouseout', () => {
  closeBtn.style.transform = 'scale(1)';
});

closeBtn.addEventListener('click', () => {
  closeBtn.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.remove();
});

menuBtn.addEventListener('click', () => {
  closeBtn.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  if (!navLinks) {
    const wrap = document.createElement('div');
    wrap.className = 'nav-links fixed inset-x-6 top-20 bg-gray-100/90 text-blue-700 dark:bg-slate-950/90 dark:text-gray-100 p-6 rounded-2xl shadow-md dark:shadow-slate-900 nav-frost z-50';
    wrap.innerHTML = '<a class="block py-2" href="#work">Work</a><a class="block py-2" href="#about">About</a><a class="block py-2" href="#contact">Contact</a>';
    document.body.appendChild(wrap);
  } else navLinks.remove();
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