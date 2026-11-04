import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import '../globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://diegoromero.dev'),
  title: { default: 'Portafolio de Diego Romero', template: '%s | Diego Romero' },
  description: 'Diego Romero, desarrollador full-stack. Conocé mi experiencia, proyectos de software y trayectoria profesional.',
  icons: { icon: '/img/dr-mark.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{}` }} /></head><body><a className="skip-link" href="#main-content">Saltar al contenido</a><Navigation /><main id="main-content" className="content">{children}</main><footer>© {new Date().getFullYear()} Diego Romero · Hecho con Next.js</footer></body></html>;
}
