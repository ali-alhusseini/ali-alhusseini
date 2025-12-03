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
            apple: {
                role: 'Specialist',
                summary:'At Apple, I work as a Specialist helping customers choose the right products, set up their devices, and solve technical issues in a clear, approachable way. This role has strengthened my ability to translate complex concepts into simple language, stay calm under pressure, and collaborate closely with a large, fast-paced team. It has also deepened my appreciation for polished user experiences, which directly influences how I design and build digital products.'
            },
            nsp: {
                role: 'Digital Experience Co-Op',
                summary: 'At Nova Scotia Power, I completed two Digital Experience co-op terms focused on improving the usability and consistency of the company\'s web presence. I worked on enhancing site functionality and accessibility, as well as contributing to governance documentation that helped standardize how content is managed across teams. This experience connected my technical skills with real business needs and taught me how thoughtful digital experiences can support both customers and internal stakeholders.'
            },
            bestbuy: {
                role: 'Computing Solutions Advisor',
                summary: 'At Best Buy, I worked as a Computing Solutions Advisor, helping customers find the right laptops, accessories, and services based on their individual needs. The role required strong product knowledge, attentive listening, and the ability to explain trade-offs between different technical options. It gave me a solid foundation in customer service and solution-oriented thinking that continues to shape how I approach both technical problems and user experience design.'
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
            apple: {
                role: 'Spécialiste',
                summary:'Chez Apple, je travaille comme spécialiste en aidant les clients à choisir les bons produits, à configurer leurs appareils et à résoudre leurs problèmes techniques de manière claire et accessible. Ce rôle a renforcé ma capacité à vulgariser des concepts complexes, à rester calme sous pression et à collaborer au sein d\'une grande équipe dynamique. Il a aussi approfondi mon appréciation pour les expériences utilisateur soignées, ce qui influence directement la façon dont je conçois et développe des produits numériques.'
            },
            nsp: {
                role: 'Stagiaire en expérience numérique',
                summary: 'Chez Nova Scotia Power, j\'ai effectué deux stages coopératifs au sein de l\'équipe Expérience numérique, axés sur l\'amélioration de la convivialité et de la cohérence du site web de l\'entreprise. J\'ai contribué à l\'optimisation des fonctionnalités et de l\'accessibilité du site, ainsi qu\'à la rédaction de documents de gouvernance pour standardiser la gestion du contenu entre les équipes. Cette expérience m\'a permis de lier mes compétences techniques à de vrais besoins d\'affaires et de comprendre comment des expériences numériques réfléchies peuvent soutenir à la fois les clients et les parties prenantes internes.'
            },
            bestbuy: {
                role: 'Conseiller en solutions informatiques',
                summary: 'Chez Best Buy, j\'ai travaillé comme conseiller en solutions informatiques, en aidant les clients à trouver les ordinateurs, accessoires et services les mieux adaptés à leurs besoins. Ce poste exigeait une solide connaissance des produits, une grande capacité d\'écoute et la faculté d\'expliquer clairement les compromis entre différentes options techniques. Il m\'a donné une base solide en service à la clientèle et en réflexion orientée solution, qui continue d\'influencer ma façon d\'aborder les problèmes techniques et la conception d\'expériences utilisateur.'
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