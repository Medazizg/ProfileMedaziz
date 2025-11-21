"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.name": "Med Aziz Gtari",
    "hero.title": "Full Stack Web Developer",
    "hero.description":
      "I am a passionate and highly skilled Full-Stack Web Developer with expertise in React, Next.js, Node.js, and modern web technologies. I specialize in building dynamic, responsive, and user-friendly applications with strong attention to detail and seamless user experience.",
    "hero.cta": "See My Work",

    // About
    "about.title": "About Me",
    "about.journey": "My Journey",
    "about.description1":
      "I am a passionate and highly skilled Full-Stack Web Developer with expertise in React, Next.js, Node.js and modern web technologies.",
    "about.description2":
      "With hands-on experience in both frontend and backend development, I am eager to contribute to innovative projects.",
    "about.description3":
      "I completed a Full-Stack JavaScript Bootcamp at GoMyCode, mastering real-world development skills.",
    "about.skills": "Technologies & Skills",
    "about.experience": "Years Experience",
    "about.projects": "Projects Completed",
    "about.satisfaction": "Client Satisfaction",

    // Projects
    "projects.title": "My Projects",
    "projects.subtitle":
      "A selection of my latest projects showcasing my ability to build elegant interfaces, high-performance applications, and real-world digital solutions. From luxury car rentals to healthcare systems and trading tools, these projects reflect my versatility across web and mobile development.",

    "projects.news.title": "News Today Website",
    "projects.news.description":
      "Dynamic news website with authentication and user engagement",
    "projects.news.long":
      "Developed a dynamic news website with authentication and responsive design. Built with Node.js & Express.",

    "projects.crypto.title": "Crypto Website",
    "projects.crypto.description":
      "Real-time cryptocurrency website with live updates",
    "projects.crypto.long":
      "Built a realtime crypto website using React.js, Redux, and API integrations.",

    "projects.3d.title": "3D Customization Website",
    "projects.3d.description":
      "3D t-shirt customization platform with AI integration",
    "projects.3d.long":
      "Developed a 3D t-shirt customization platform using Three.js, React.js, and Next.js.",

    "projects.demo": "Live Demo",
    "projects.code": "View Code",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's Work Together",
    "contact.description":
      "I'm always interested in new opportunities and exciting projects.",
    "contact.location": "Location",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.send": "Send Message",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Next.js and TailwindCSS",

    // Education
    "education.title": "Education",
    "education.bootcamp":
      "GoMyCode – Full-Stack JavaScript Bootcamp (2022–2023)",
    "education.description":
      "Mastered full-stack development with React, Node.js, MongoDB, and REST APIs.",

    // Languages
    "languages.title": "Languages",
    "languages.arabic": "Arabic: Native",
    "languages.french": "French: Intermediate",
    "languages.english": "English: Intermediate",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Salut, je suis",
    "hero.name": "Med Aziz Gtari",
    "hero.title": "Développeur Web Full Stack",
    "hero.description":
      "Je suis un développeur Web Full-Stack passionné et hautement qualifié avec une expertise en React, Next.js, Node.js et les technologies web modernes.",
    "hero.cta": "Voir Mon Travail",

    // About
    "about.title": "À Propos de Moi",
    "about.journey": "Mon Parcours",
    "about.description1":
      "Je suis un développeur Web Full-Stack passionné avec une expertise en React, Next.js et Node.js.",
    "about.description2":
      "Avec une expérience en frontend et backend, je suis prêt pour des projets innovants.",
    "about.description3": "J'ai terminé un Bootcamp Full-Stack chez GoMyCode.",
    "about.skills": "Technologies et Compétences",
    "about.experience": "Années d'Expérience",
    "about.projects": "Projets Terminés",
    "about.satisfaction": "Satisfaction Client",

    // Projects
    "projects.title": "Mes Projets",
    "projects.subtitle":
      "Une sélection de mes derniers projets montrant ma capacité à créer des interfaces élégantes, des applications performantes et des solutions numériques réelles. Des locations de voitures de luxe aux systèmes de santé et outils de trading, ces projets reflètent ma polyvalence dans le développement web et mobile.",

    "projects.news.title": "Site Web News Today",
    "projects.news.description":
      "Site d'actualités dynamique avec authentification",
    "projects.news.long":
      "Développé un site web dynamique avec Node.js & Express.",

    "projects.crypto.title": "Site Web Crypto",
    "projects.crypto.description": "Site web de cryptomonnaie en temps réel",
    "projects.crypto.long": "Construit avec React.js, Redux et API crypto.",

    "projects.3d.title": "Site Web 3D Personnalisé",
    "projects.3d.description": "Plateforme 3D pour personnaliser des t-shirts",
    "projects.3d.long": "Créé avec Three.js, React.js et Next.js.",

    "projects.demo": "Démo Live",
    "projects.code": "Voir le Code",

    // Contact
    "contact.title": "Entrer en Contact",
    "contact.subtitle": "Travaillons Ensemble",
    "contact.description":
      "Je suis ouvert aux nouvelles opportunités et projets.",
    "contact.location": "Localisation",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Votre Email",
    "contact.form.message": "Votre Message",
    "contact.form.send": "Envoyer",

    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.built": "Construit avec Next.js et TailwindCSS",

    // Education
    "education.title": "Éducation",
    "education.bootcamp":
      "GoMyCode – Bootcamp JavaScript Full-Stack (2022–2023)",
    "education.description": "Maîtrisé React, Node.js, MongoDB et APIs REST.",

    // Languages
    "languages.title": "Langues",
    "languages.arabic": "Arabe : Natif",
    "languages.french": "Français : Intermédiaire",
    "languages.english": "Anglais : Intermédiaire",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
