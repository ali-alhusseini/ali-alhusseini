// projects rendering
const projectsEl = document.getElementById('projects');
const tpl = document.getElementById('project-template');
const arrowUpIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio built with HTML, Tailwind and vanilla JS.',
    technologies: ['JavaScript', 'HTML', 'TailwindCSS', 'Vite'],
    url: 'https://github.com/ali-alhusseini/ali-alhusseini'
  },
  {
    title: 'Accessible Blogging Site',
    description: 'A blooging platform focused on accessibility for motor impaired users to post and share blogs.',
    technologies: ['JavaScript', 'JQuery', 'Bootstrap'],
    url: 'https://github.com/ali-alhusseini/woodland-conservation'
  },
  {
    title: 'Radiohead Fan Site',
    description: 'A frontend website built to showcase the band Radiohead.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'http://web.cs-smu.ca/~u04/submissions/submission01/home_page.html'
  },
  {
    title: 'Woodland Conservation Site',
    description: 'A website built for a local conservation site. Designed to be accessible and responsive and it incorporates APIs such as cloudinary, Google Maps, and Formspree.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Restful APIs'],
    url: 'https://github.com/ali-alhusseini/woodland-conservation'
  },
  {
    title: 'MySQL and Flask Database App',
    description: 'A web application using Flask, MySQL, and Bootstrap to manage and display data for a fictional car dealership.',
    technologies: ['Python', 'Flask', 'MySQL', 'Bootstrap'],
    url: 'https://github.com/ali-alhusseini/flask_mysql_app'
  },
  {
    title: 'Traffic Manager',
    description: 'Semaphore-based intersection control to prevent deadlock and starvation in a multi-threaded environment.',
    technologies: ['C', 'Pthreads', 'OS Concepts'],
    url: 'https://github.com/ali-alhusseini/traffic-manager'
  },
];

function renderProjects(list) {
  projectsEl.innerHTML = '';
  list.forEach(p => {
    const node = tpl.content.cloneNode(true);
    node.querySelector('.project-title').textContent = p.title;
    node.querySelector('.project-desc').textContent = p.description;
    const a = node.querySelector('.project-link');
    a.href = p.url || '#';

    if (p.url.includes('github.com')) {
      a.innerHTML = `GitHub ${arrowUpIcon}`;
    } else if (p.url) {
      a.innerHTML = `Live ${arrowUpIcon}`;
    } else {
      a.textContent = 'Details';
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

renderProjects(projects);