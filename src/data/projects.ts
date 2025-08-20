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

export const projects: Project[] = [
  {
    id: "news-today",
    title: "News Today Website",
    description: "Dynamic news website with authentication and user engagement",
    longDescription: "Developed a dynamic news website with authentication, user engagement, and responsive design. Implemented Node.js + Express for server-side features. Improved UX with community interaction and intuitive navigation.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/Medazizg",
    codeUrl: "https://github.com/Medazizg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"]
  },
  {
    id: "crypto-website",
    title: "Crypto Website",
    description: "Real-time cryptocurrency website with live updates",
    longDescription: "Built a real-time cryptocurrency website using React.js and Redux. Integrated APIs for live updates and analytics. Designed a user-friendly interface for seamless navigation.",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/Medazizg",
    codeUrl: "https://github.com/Medazizg",
    technologies: ["React.js", "Redux", "API Integration", "TailwindCSS"]
  },
  {
    id: "3d-customization",
    title: "3D Customization Website",
    description: "3D t-shirt customization platform with AI integration",
    longDescription: "Developed a 3D t-shirt customization platform using Three.js, React.js, and Next.js. Integrated AI-powered chat for personalized designs. Delivered smooth user interaction and successful project completion.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/Medazizg",
    codeUrl: "https://github.com/Medazizg",
    technologies: ["Three.js", "React.js", "Next.js", "AI Integration"]
  }
];

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
  { name: "UI/UX Design", icon: "✨" }
];
