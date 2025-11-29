import './style.css'
import './projects.js'
import './i18n.js'
import './animations.js'

// set current year in footer
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

// copy email to clipboard
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailAddress = document.getElementById('email').textContent.trim();
const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'

copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(emailAddress).then(() => {
    copyEmailBtn.innerHTML = checkIcon;
    setTimeout(() => {
      copyEmailBtn.innerHTML = copyIcon;
    }, 1500);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
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