import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import '../globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://diegoromero.dev'),
  title: { default: 'Diego Romero Portfolio', template: '%s | Diego Romero' },
  description: 'Diego Romero, full-stack developer. Explore my work, software projects, and journey in technology.',
  icons: { icon: '/img/dr-mark.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{}` }} /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Navigation /><main id="main-content" className="content">{children}</main><footer>© {new Date().getFullYear()} Diego Romero · Built with Next.js</footer></body></html>;
}
