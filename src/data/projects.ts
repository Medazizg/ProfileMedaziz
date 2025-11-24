// ===============================
// Project Interface (FIX)
// ===============================
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  technologies: string[];
}

// ===============================
// Projects Data
// ===============================

export const projects: Project[] = [
  {
    id: "secret-boutique",
    title: "The Secret Boutique",
    description: "Luxury travel boutique with GSAP animations and modern UI",
    longDescription:
      "A high-end travel boutique demo website featuring elegant animations, GSAP-powered transitions, responsive UI, and immersive visual design. Built to showcase premium travel experiences with smooth interactions and refined aesthetics.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1174&auto=format&fit=crop",
    demoUrl: "https://the-secret-boutique.vercel.app/",
    codeUrl: "https://github.com/Medazizg/The-Secret-Boutique",
    technologies: ["React", "GSAP", "TailwindCSS", "Framer Motion"],
  },

  {
    id: "trading-journal",
    title: "Trading Journal",
    description: "A minimal and fast trading journal built with Vite + TS",
    longDescription:
      "A clean and efficient trading journal built with React, TypeScript, and Vite. Designed for traders to track trades, analyze performance, and maintain structured logs.",
    image:
      "https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://trading-journal-ngsw.vercel.app/",
    codeUrl: "https://github.com/Medazizg/TradingJournal",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
  },

  {
    id: "alphago-delivery",
    title: "Alphago - Delivery Management App",
    description:
      "Cross-platform delivery management app built with React Native & Firebase",
    longDescription:
      "Alphago is a complete delivery management application built with Expo, React Native, TypeScript, and Firebase. Includes real-time tracking, authentication, and modern UI.",
    image:
      "https://images.unsplash.com/photo-1659353741155-e988422cf9ed?q=80&w=1170&auto=format&fit=crop",
    demoUrl: "https://alphago-nine.vercel.app/",
    codeUrl: "https://github.com/Medazizg/app-alphago",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
  },

  {
    id: "luxedrive",
    title: "LuxeDrive – Luxury Car Rental",
    description: "Premium car rental website with elegant UI",
    longDescription:
      "LuxeDrive is a luxury car rental website offering high-end vehicle showcases, modern UI, smooth animations, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop",
    demoUrl: "https://carrent-henna.vercel.app/",
    codeUrl: "https://carrent-henna.vercel.app/",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },

  {
    id: "ste-dsg-inventory",
    title: "STE DSG – Inventory Management System",
    description:
      "Full inventory & stock management system built with Vite.js and NestJS",
    longDescription:
      "A complete inventory management system built with React (Vite), NestJS, and Supabase. Supports stock in/out, products, suppliers, invoices, and role-based access.",
    image:
      "https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?q=80&w=1237&auto=format&fit=crop",
    demoUrl: "https://aziz-2963.onrender.com/",
    codeUrl: "https://github.com/Medazizg/ste-dsg-gros",
    technologies: ["React", "Vite", "NestJS", "Supabase", "TailwindCSS"],
  },
];

// ===============================
// Skills Data
// ===============================

export const skills = [
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redux", icon: "🔄" },
  { name: "TailwindCSS", icon: "💨" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML/CSS", icon: "🌐" },
  { name: "React Native", icon: "📱" },
  { name: "Three.js", icon: "🎮" },
  { name: "Figma", icon: "🎨" },
  { name: "Git", icon: "📝" },
  { name: "GitHub", icon: "🐙" },
  { name: "API Integration", icon: "🔗" },
  { name: "UI/UX Design", icon: "✨" },
];
