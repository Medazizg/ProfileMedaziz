import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Med Aziz Gtari - Full Stack Developer',
  description: 'Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating dynamic, responsive, and user-friendly applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'JavaScript', 'TypeScript', 'TailwindCSS', 'MongoDB', 'Express.js'],
  authors: [{ name: 'Med Aziz Gtari' }],
  creator: 'Med Aziz Gtari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Med Aziz Gtari - Full Stack Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Med Aziz Gtari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Aziz Gtari - Full Stack Developer',
    description: 'Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <LanguageProvider>
          <ThemeProvider defaultTheme="dark">
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
