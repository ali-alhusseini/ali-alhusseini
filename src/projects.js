import { getCurrentLanguage, onLanguageChange, translations } from './i18n.js';

// projects rendering
const projectsEl = document.getElementById('projects');
const tpl = document.getElementById('project-template');
const arrowUpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

const projects = [
  {
    title: 'Halifax Kurdish Society Web App',
    descriptionKey: 'work.projects.halifaxKurdishSocietyWebApp.description',
    technologies: ['React', 'React Router V6', 'i18next', 'TailwindCSS', 'Vite'],
    url: 'https://github.com/ali-alhusseini/halifax-kurdish',
    layout:'featured',
    image: '../public/projects/halifax-kurdish-society-web-app-screenshot.webp',
    imageAltKey: 'work.projects.halifaxKurdishSocietyWebApp.imageAlt'
  },
  {
    title: 'Radiohead Fan Site',
    descriptionKey: 'work.projects.radioheadFanSite.description',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'http://web.cs-smu.ca/~u04/submissions/submission01/home_page.html',
    layout: 'tall',
    image: '../public/projects/radiohead-website-demo.mov',
    imageAltKey: 'work.projects.radioheadFanSite.imageAlt'
  },
  {
    title: 'Portfolio Website',
    descriptionKey: 'work.projects.portfolioWebsite.description',
    technologies: ['JavaScript', 'HTML', 'TailwindCSS', 'Vite'],
    url: 'https://github.com/ali-alhusseini/ali-alhusseini'
  },
  {
    title: 'MySQL and Flask Database App',
    descriptionKey: 'work.projects.mysqlFlaskDatabaseApp.description',
    technologies: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
    url: 'https://github.com/ali-alhusseini/flask_mysql_app'
  },
  {
    title: 'Woodland Conservation Site',
    descriptionKey: 'work.projects.woodlandConservationSite.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Restful APIs'],
    url: 'http://web.cs-smu.ca/~u04/woodland-conservation/index.html',
    image: '../public/projects/woodland-conservation-screenshot.webp',
    imageAltKey: 'work.projects.woodlandConservationSite.imageAlt',
    layout: 'wide'
  },
  {
    title: 'Accessible Blogging Site',
    descriptionKey: 'work.projects.accessibleBloggingSite.description',
    technologies: ['JavaScript', 'JQuery', 'Bootstrap'],
    url: 'https://github.com/ali-alhusseini/woodland-conservation'
  },
  {
    title: 'Traffic Manager',
    descriptionKey: 'work.projects.trafficManager.description',
    technologies: ['C', 'Pthreads', 'OS Concepts'],
    url: 'https://github.com/ali-alhusseini/traffic-manager',
    image: '../public/projects/traffic-manager-sceenshot.png',
    imageAltKey: 'work.projects.trafficManager.imageAlt'
  }
];

function getTranslation(lang, path, fallback = '') {
  const keys = path.split('.');
  let value = translations[lang] || translations.en;

  keys.forEach((key) => {
    if (value) value = value[key];
  });

  return typeof value === 'string' ? value : fallback;
}

function getLayoutClass(layout) {
  const classes = {
    wide: 'project-card--wide',
    tall: 'project-card--tall',
    featured: 'project-card--featured'
  };

  return classes[layout] || '';
}

function renderProjects(list, lang) {
  projectsEl.innerHTML = '';

  list.forEach(p => {
    const node = tpl.content.cloneNode(true);
    const card = node.querySelector('.project-card');
    const projectTitle = node.querySelector('.project-title');
    const projectDescription = node.querySelector('.project-desc');
    const projectImage = node.querySelector('.project-image');

    projectTitle.textContent = p.title;
    projectDescription.textContent = getTranslation(lang, p.descriptionKey, '');

    if (p.image && projectImage) {
      projectImage.src = p.image;
      projectImage.alt = getTranslation(lang, p.imageAltKey, p.title);
      projectImage.parentElement.style.display = 'block';
    } else if (projectImage) {
      projectImage.parentElement.style.display = 'none';
    }

    const layoutClass = getLayoutClass(p.layout);
    if (layoutClass) card.classList.add(layoutClass);

    const a = node.querySelector('.project-link');
    a.href = p.url || '#';

    let isGitHubLink = false;
    if (p.url) {
      try {
        const parsedUrl = new URL(p.url, window.location && window.location.origin ? window.location.origin : undefined);
        const hostname = parsedUrl.hostname;
        isGitHubLink = hostname === 'github.com' || hostname.endsWith('.github.com');
      } catch (e) {
        isGitHubLink = false;
      }
    }

    if (isGitHubLink) {
      a.innerHTML = `${getTranslation(lang, 'work.cta.github', 'GitHub')} ${arrowUpIcon}`;
    } else if (p.url) {
      a.innerHTML = `${getTranslation(lang, 'work.cta.live', 'Live')} ${arrowUpIcon}`;
    } else {
      a.textContent = getTranslation(lang, 'work.cta.details', 'Details');
    }

    const technologies = node.querySelector('.project-tech');
    p.technologies.forEach(tech => {
      const techEl = document.createElement('span');
      techEl.className = 'inline-block bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-slate-300 text-xs px-2 py-1 rounded-full mr-2 mb-2';
      techEl.textContent = tech;
      technologies.appendChild(techEl);
    });
    projectsEl.appendChild(node);
  });
}

const activeLanguage = getCurrentLanguage();
renderProjects(projects, activeLanguage);
onLanguageChange((lang) => renderProjects(projects, lang));