import './style.css'
import './projects.js'
import { t } from 'i18next';

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

// simple dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) document.documentElement.classList.add('dark');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    document.body.classList.remove('bg-white');
    document.body.classList.add('bg-gray-950', 'text-white');
  } else {
    document.body.classList.remove('bg-gray-950', 'text-white');
    document.body.classList.add('bg-white', 'text-gray-900');
  }
});

// mobile menu (very small example)
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) {
    const wrap = document.createElement('div');
    wrap.className = 'nav-links fixed inset-x-6 top-20 bg-white p-6 rounded-2xl shadow-lg';
    wrap.innerHTML = '<a class="block py-2" href="#work">Work</a><a class="block py-2" href="#about">About</a><a class="block py-2" href="#contact">Contact</a>';
    document.body.appendChild(wrap);
  } else navLinks.remove();
});
