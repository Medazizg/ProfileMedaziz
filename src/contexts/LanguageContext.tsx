'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Med Aziz Gtari',
    'hero.title': 'Full Stack Web Developer',
    'hero.description': 'I am a passionate and highly skilled Full-Stack Web Developer with expertise in React, Next.js, Node.js, and modern web technologies. I specialize in building dynamic, responsive, and user-friendly applications with strong attention to detail and seamless user experience.',
    'hero.cta': 'See My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.journey': 'My Journey',
    'about.description1': 'I am a passionate and highly skilled Full-Stack Web Developer with expertise in React, Next.js, Node.js, and modern web technologies. I specialize in building dynamic, responsive, and user-friendly applications with strong attention to detail and seamless user experience.',
    'about.description2': 'With hands-on experience in both frontend and backend development, I am eager to contribute to innovative projects and solve real-world challenges with clean and efficient code.',
    'about.description3': 'I have completed a Full-Stack JavaScript Bootcamp at GoMyCode, where I mastered full-stack development and worked on real-world projects with strong focus on problem-solving and teamwork.',
    'about.skills': 'Technologies & Skills',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.satisfaction': 'Client Satisfaction',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.news.title': 'News Today Website',
    'projects.news.description': 'Dynamic news website with authentication and user engagement',
    'projects.news.long': 'Developed a dynamic news website with authentication, user engagement, and responsive design. Implemented Node.js + Express for server-side features. Improved UX with community interaction and intuitive navigation.',
    'projects.crypto.title': 'Crypto Website',
    'projects.crypto.description': 'Real-time cryptocurrency website with live updates',
    'projects.crypto.long': 'Built a real-time cryptocurrency website using React.js and Redux. Integrated APIs for live updates and analytics. Designed a user-friendly interface for seamless navigation.',
    'projects.3d.title': '3D Customization Website',
    'projects.3d.description': '3D t-shirt customization platform with AI integration',
    'projects.3d.long': 'Developed a 3D t-shirt customization platform using Three.js, React.js, and Next.js. Integrated AI-powered chat for personalized designs. Delivered smooth user interaction and successful project completion.',
    'projects.demo': 'Live Demo',
    'projects.code': 'View Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s Work Together',
    'contact.description': 'I\'m always interested in new opportunities and exciting projects. Feel free to reach out!',
    'contact.location': 'Location',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Next.js and TailwindCSS',
    
    // Education
    'education.title': 'Education',
    'education.bootcamp': 'GoMyCode – Full-Stack JavaScript Bootcamp (2022–2023)',
    'education.description': 'Mastered full-stack development (React, Node.js, MongoDB, APIs). Worked on real-world projects with strong focus on problem-solving and teamwork.',
    
    // Languages
    'languages.title': 'Languages',
    'languages.arabic': 'Arabic: Native',
    'languages.french': 'French: Intermediate',
    'languages.english': 'English: Intermediate'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Med Aziz Gtari',
    'hero.title': 'Développeur Web Full Stack',
    'hero.description': 'Je suis un développeur Web Full-Stack passionné et hautement qualifié avec une expertise en React, Next.js, Node.js et les technologies web modernes. Je me spécialise dans la création d\'applications dynamiques, responsives et conviviales avec une grande attention aux détails et une expérience utilisateur fluide.',
    'hero.cta': 'Voir Mon Travail',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.journey': 'Mon Parcours',
    'about.description1': 'Je suis un développeur Web Full-Stack passionné et hautement qualifié avec une expertise en React, Next.js, Node.js et les technologies web modernes. Je me spécialise dans la création d\'applications dynamiques, responsives et conviviales avec une grande attention aux détails et une expérience utilisateur fluide.',
    'about.description2': 'Avec une expérience pratique en développement frontend et backend, je suis désireux de contribuer à des projets innovants et de résoudre des défis du monde réel avec un code propre et efficace.',
    'about.description3': 'J\'ai terminé un Bootcamp JavaScript Full-Stack chez GoMyCode, où j\'ai maîtrisé le développement full-stack et travaillé sur des projets du monde réel avec un fort accent sur la résolution de problèmes et le travail d\'équipe.',
    'about.skills': 'Technologies et Compétences',
    'about.experience': 'Années d\'Expérience',
    'about.projects': 'Projets Terminés',
    'about.satisfaction': 'Satisfaction Client',
    
    // Projects Section
    'projects.title': 'Mes Projets',
    'projects.news.title': 'Site Web News Today',
    'projects.news.description': 'Site web d\'actualités dynamique avec authentification et engagement utilisateur',
    'projects.news.long': 'Développé un site web d\'actualités dynamique avec authentification, engagement utilisateur et design responsive. Implémenté Node.js + Express pour les fonctionnalités côté serveur. Amélioré l\'UX avec interaction communautaire et navigation intuitive.',
    'projects.crypto.title': 'Site Web Crypto',
    'projects.crypto.description': 'Site web de cryptomonnaie en temps réel avec mises à jour en direct',
    'projects.crypto.long': 'Construit un site web de cryptomonnaie en temps réel utilisant React.js et Redux. Intégré des APIs pour les mises à jour en direct et les analyses. Conçu une interface conviviale pour une navigation fluide.',
    'projects.3d.title': 'Site Web de Personnalisation 3D',
    'projects.3d.description': 'Plateforme de personnalisation de t-shirts 3D avec intégration IA',
    'projects.3d.long': 'Développé une plateforme de personnalisation de t-shirts 3D utilisant Three.js, React.js et Next.js. Intégré un chat alimenté par IA pour des designs personnalisés. Livré une interaction utilisateur fluide et achèvement réussi du projet.',
    'projects.demo': 'Démo Live',
    'projects.code': 'Voir le Code',
    
    // Contact Section
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Travaillons Ensemble',
    'contact.description': 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants. N\'hésitez pas à me contacter !',
    'contact.location': 'Localisation',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer le Message',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec Next.js et TailwindCSS',
    
    // Education
    'education.title': 'Éducation',
    'education.bootcamp': 'GoMyCode – Bootcamp JavaScript Full-Stack (2022–2023)',
    'education.description': 'Maîtrisé le développement full-stack (React, Node.js, MongoDB, APIs). Travaillé sur des projets du monde réel avec un fort accent sur la résolution de problèmes et le travail d\'équipe.',
    
    // Languages
    'languages.title': 'Langues',
    'languages.arabic': 'Arabe : Natif',
    'languages.french': 'Français : Intermédiaire',
    'languages.english': 'Anglais : Intermédiaire'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
