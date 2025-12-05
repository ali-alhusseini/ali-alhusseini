const languageToggle = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        title: "Ali Alhusseini — Software Developer",
        nav: {
            work : "Work",
            about: "About",
            contact: "Contact",
            hello: "Say hello"
        },
        hero: {
            title: "Designing and developing clean, user-focused digital experiences.",
            subtitle: 'Software developer and recent Computer Science graduate.',
            resume: 'Download Resume '
        },
        work: {
            title: "Recent Projects",
            content: "A selection of projects I have done over the years, some of which have been part of my Computer Science degree, others to learn new skills and experiment with new technologies.",
            view: "View ↗"
        },
        about: {
            title: 'About',
            content: 'I\'m a software developer with a passion for creating clean, user-focused digital experiences. With a background in computer science, I specialize in building responsive and accessible solutions that prioritize usability and performance.',
            content2: 'When I\'m not coding, you can find me exploring the outdoors, reading books, or experimenting with new web technologies. I\'m always eager to learn and take on new challenges.'
        },
        experience: {
            title: 'Experience',
            overview: 'Overview',
            skills: 'Key Skills',
            apple: {
                role: 'Specialist',
                point1: 'Mentor and train new team members, improving team knowledge and performance.',
                point2: 'Deliver exceptional customer experiences, consistently driving satisfaction and brand loyalty.',
                point3: 'Provide tailored technical advice and troubleshooting for Apple products.',
                skill: {
                    communication: 'Communication',
                    problemSolving: 'Problem Solving',
                    teamwork: 'Teamwork',
                    leadership: 'Leadership'
                }
            },
            nsp: {
                role: 'Digital Experience Co-Op',
                point1: 'Led usability and accessibility improvements to enhance digital experience for thousands of users.',
                point2: 'Authored governance documentation to streamline web content management processes across teams.',
                point3: 'Collaborated cross-functionally with designers, developers, and stakeholders to deliver effective digital solutions.',
                point4: 'Analyzed user feedback and analytics to prioritize feature updates.'
            ,
            skill: {
                webDevelopment: 'Web Development',
                accessibility: 'Accessibility',
                uxDesign: 'UX Design',
                javascript: 'JavaScript',
                bootstrap: 'Bootstrap',
                processDocumentation: 'Process Documentation'
            }
            },
            bestbuy: {
                role: 'Computing Solutions Advisor',
                point1: 'Delivered personalized technology solutions based on customer needs and preferences.',
                point2: 'Communicated complex technical concepts clearly to non-technical customers.',
                point3: 'Balanced sales targets with a strong customer-first approach.'
            ,
            skill: {
                sales: 'Sales',
                customerService: 'Customer Service',
                technicalKnowledge: 'Technical Knowledge',
                communication: 'Communication',
                problemSolving: 'Problem Solving'
            }
            }
        },
        contact: {
            title: 'Get in Touch',
            content: 'Feel free to reach out, I\'m always open to new opportunities, collaborations, and projects.'
        }
    },
    fr: {
        title: "Ali Alhusseini — Développeur de logiciels",
        nav: {
            work : "Projets",
            about: "À propos",
            contact: "Contact",
            hello: "Dire bonjour"
        },
        hero: {
            title: "Concevoir et développer des expériences numériques claires et centrées sur l'utilisateur.",
            subtitle: 'Développeur de logiciels et récent diplômé en informatique.',
            resume: 'Télécharger le CV'
        },
        work: {
            title: "Projets récents",
            content: "Une sélection de projets que j'ai réalisés au fil des ans, dont certains dans le cadre de mon diplôme en informatique, d'autres pour apprendre de nouvelles compétences et expérimenter de nouvelles technologies.",
        },
        about: {
            title: 'À propos',
            content: 'Je suis un développeur de logiciels passionné par la création d\'expériences numériques épurées et centrées sur l\'utilisateur. Avec une formation en informatique, je me spécialise dans la création de solutions interactives et accessibles qui privilégient la facilité d\'utilisation et la performance.',
            content2: 'Lorsque je ne code pas, vous pouvez me trouver en train d\'explorer la nature, de lire des livres ou d\'expérimenter de nouvelles technologies web. J\'ai toujours hâte d\'apprendre et de relever de nouveaux défis.'
        },
        experience: {
            title: 'Expérience',
            overview: 'Aperçu',
            skills: 'Compétences Clés',
            apple: {
                role: 'Spécialiste',
                point1: 'Encadrer et former les nouveaux membres de l\'équipe, améliorant ainsi les connaissances et les performances de l\'équipe.',
                point2: 'Offrir des expériences client exceptionnelles, favorisant fidélité et satisfaction constantes.',
                point3: 'Fournis des conseils techniques personnalisés et dépannage pour les produits Apple.',
                skill: {
                    communication: 'Communication',
                    problemSolving: 'Résolution de problèmes',
                    teamwork: 'Travail d\'équipe',
                    leadership: 'Leadership'
                }
            },
            nsp: {
                role: 'Stagiaire en expérience numérique',
                point1: 'Ai dirigé des améliorations d\'utilisabilité et d\'accessibilité pour des milliers d\'utilisateurs.',
                point2: 'Ai rédigé des documents de gouvernance pour optimiser la gestion de contenu web entre équipes.',
                point3: 'Ai collaboré avec designers, développeurs et parties prenantes pour des solutions numériques efficaces.',
                point4: 'Ai analysé retours utilisateurs et données pour prioriser les mises à jour.'
            ,
            skill: {
                webDevelopment: 'Développement Web',
                accessibility: 'Accessibilité',
                uxDesign: 'Conception UX',
                javascript: 'JavaScript',
                bootstrap: 'Bootstrap',
                processDocumentation: 'Documentation des processus'
            }
            },
            bestbuy: {
                role: 'Conseiller en solutions informatiques',
                point1: 'Ai fourni des solutions technologiques personnalisées selon les besoins clients.',
                point2: 'Ai communiqué des concepts techniques complexes de manière claire aux non-techniciens.',
                point3: 'Ai équilibré objectifs de vente et approche centrée client.'
            ,
            skill: {
                sales: 'Ventes',
                customerService: 'Service client',
                technicalKnowledge: 'Connaissances techniques',
                communication: 'Communication',
                problemSolving: 'Résolution de problèmes'
            }
            }
        },
        contact: {
            title: 'Contactez-moi',
            content: 'N\'hésitez pas à me contacter, je suis toujours ouvert à de nouvelles opportunités, collaborations et projets.'
        }
    }
};

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        keys.forEach(key => {
            if (translation) translation = translation[key];
        });
        if (translation) element.textContent = translation;
    })
}

function fadeAndUpdateLanguage(lang) {
    document.documentElement.style.pointerEvents = 'none';
    document.body.style.transition = 'opacity 0.28s linear';
    document.body.style.opacity = '0.3';
    setTimeout(() => {
        applyTranslations(lang);
        document.body.style.opacity = '1';
        document.documentElement.style.pointerEvents = 'auto';
    }, 250);
    localStorage.setItem('lang', lang);
}

currentLanguage = currentLanguage || 'en';
languageToggle.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
applyTranslations(currentLanguage);

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    languageToggle.textContent = currentLanguage === 'en' ? 'FR' : 'EN';
    fadeAndUpdateLanguage(currentLanguage);
});

// resume download link update
const resumeLink = document.getElementById('resume-link');
resumeLink.href = currentLanguage === 'en' ? 'assets/Ali_Alhusseini_Resume.pdf' : 'assets/Ali_Alhusseini_Resume.pdf';

languageToggle.addEventListener('click', () => {
    resumeLink.href = currentLanguage === 'en' ? 'assets/Ali_Alhusseini_Resume.pdf' : 'assets/Ali_Alhusseini_Resume.pdf';
});