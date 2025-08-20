# Ghassen Nefzi - Portfolio Website

A modern, fully responsive portfolio website built with Next.js 13+, TypeScript, and TailwindCSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Dynamic Project Pages**: Individual pages for each project with detailed information
- **Contact Form**: Working contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for fast loading and great user experience

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service for contact form
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nefzighassen2/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (optional):
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/components/Contact.tsx`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

You can also deploy to:
- Netlify
- Railway
- Render
- Any platform that supports Next.js

## 📝 Customization

### Personal Information

Update your personal information in:
- `src/data/projects.ts` - Your projects and skills
- `src/components/Hero.tsx` - Your name and bio
- `src/components/About.tsx` - About section content
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer links

### Projects

Add or modify projects in `src/data/projects.ts`:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Short description",
  longDescription: "Detailed description for project page",
  image: "https://your-image-url.com/image.jpg",
  demoUrl: "https://your-demo-url.com",
  codeUrl: "https://github.com/username/repo",
  technologies: ["React", "Next.js", "TailwindCSS"]
}
```

### Styling

- Colors and themes: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component-specific styles: Individual component files

## 📧 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Update `src/components/Contact.tsx` with your credentials:

```typescript
emailjs.init("YOUR_PUBLIC_KEY");

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  // ... template variables
);
```

## 🎨 Design System

### Colors
- Primary: Blue to Purple gradient
- Secondary: Gray tones
- Accent: Various colors for different elements

### Typography
- Primary: Inter
- Headings: Poppins
- Sizes: Responsive scale from mobile to desktop

### Components
- Glass morphism effects
- Smooth hover animations
- Consistent spacing and shadows

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: your-email@example.com
- **LinkedIn**: [Ghassen Nefzi](https://www.linkedin.com/in/ghassen-nefzi)
- **GitHub**: [nefzighassen2](https://github.com/nefzighassen2)

---

Built with ❤️ by Ghassen Nefzi
