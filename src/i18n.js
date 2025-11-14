const languageToggle = document.getElementById('language-toggle');
let currentLanguage = localStorage.getItem('lang') || 'en';

const translations = {
    en: {
        title: "Ali Alhusseini — Web Developer",
        nav: {
            work : "Work",
            about: "About",
            contact: "Contact",
            hello: "Say hello"
        },
        hero: {
            title: 'Designing and developing clean, user-focused digital experiences.',
            subtitle: 'I\'m a computer science graduate with a passion for creating responsive, accessible web solutions that feel effortless.',
            resume: "Download Resume ↓",
            scroll: "Scroll Down ⇓"
        },
        work: {
            title: "Recent Work",
            content: "A selection of projects I have done over the years, some of which have been part of my Computer Science degree, otheres to learn new skills and experiment with new technologies.",
            view: "View ↗"
        },
        about: {
            title: 'About',
            content: 'I\'m a web developer with a passion for creating clean, user-focused digital experiences. With a background in computer science, I specialize in building responsive and accessible web solutions that prioritize usability and performance.',
            content2: 'When I\'m not coding, you can find me exploring the outdoors, reading books, or experimenting with new web technologies. I\'m always eager to learn and take on new challenges.'
        },
        experience: {
            title: 'Experience',
            appleTitle: 'Apple — Specialist',
            appleContent: 'Delivering exceptional customer experiences by guiding customers through Apple products and services, upholding the highest standards, and collaborating closely with colleagues.',
            appleDates: '(Oct 2021 - Present)',

            nspTitle: 'Nova Scotia Power — Digital Experience Co-Op ',
            nspContent: 'Maintained and updated nspower.ca using the CMS and Bootstrap across two consecutive terms, applying accessibility and responsive design best practices. Authored a governance document to standardize and streamline future website updates.',
            nspDates: '(Sept 2024 - Apr 2025)',

            bestbuyTitle: 'Best Buy — Computing Solutions Advisor',
            bestbuyContent: 'Assisted customers in selecting and purchasing complete computing solutions, providing expert advice on hardware and software options to meet their needs.',
            bestbuyDates: '(Jun 2019 - Oct 2021)'
        },
        contact: {
            title: 'Get in Touch',
            content: 'Feel free to reach out, I\'m always open to new opportunities, collaborations, and projects.'
        }
    },
    fr: {
        title: "Ali Alhusseini — Développeur Web",
        nav: {
            work : "Projets",
            about: "À propos",
            contact: "Contact",
            hello: "Dis bonjour"
        },
        hero: {
            title: 'Conception et développement d\'expériences numériques épurées et centrées sur l\'utilisateur.',
            subtitle: 'Je suis un diplômé en informatique passionné par la création de solutions web réactives et accessibles qui semblent sans effort.',
            resume: "Télécharger le CV ↓",
            scroll: "Faites défiler vers le bas ⇓"
        },
        work: {
            title: "Travaux récents",
            content: "Une sélection de projets que j'ai réalisés au fil des ans, dont certains dans le cadre de mon diplôme en informatique, d'autres pour apprendre de nouvelles compétences et expérimenter de nouvelles technologies.",
            view: "Voir ↗"
        },
        about: {
            title: 'À propos',
            content: 'Je suis un développeur web passionné par la création d\'expériences numériques épurées et centrées sur l\'utilisateur. Avec une formation en informatique, je me spécialise dans la création de solutions web réactives et accessibles qui privilégient la convivialité et la performance.',
            content2: 'Lorsque je ne code pas, vous pouvez me trouver en train d\'explorer la nature, de lire des livres ou d\'expérimenter de nouvelles technologies web. Je suis toujours désireux d\'apprendre et de relever de nouveaux défis.'
        },
        experience: {
            title: 'Expérience',
            appleTitle: 'Apple — Spécialiste',
            appleContent: 'Offrir des expériences client exceptionnelles en guidant les clients à travers les produits et services Apple, en respectant les normes les plus élevées et en collaborant étroitement avec les collègues.',
            appleDates: '(Oct 2021 - Présent)',
            
            nspTitle: 'Nova Scotia Power — Coopérative d\'expérience numérique ',
            nspContent: 'Maintien et mise à jour de nspower.ca en utilisant le CMS et Bootstrap sur deux mandats consécutifs, en appliquant les meilleures pratiques en matière d\'accessibilité et de conception réactive. Rédaction d\'un document de gouvernance pour standardiser et rationaliser les futures mises à jour du site Web.',
            nspDates: '(Sept 2024 - Avr 2025)',

            bestbuyTitle: 'Best Buy — Conseiller en solutions informatiques',
            bestbuyContent: 'Aider les clients à sélectionner et à acheter des solutions informatiques complètes, en fournissant des conseils d\'expert sur les options matérielles et logicielles pour répondre à leurs besoins.',
            bestbuyDates: '(Juin 2019 - Oct 2021)'
        },
        contact: {
            title: 'Entrer en contact',
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