"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const links = [['/docs/projects/storefront-pos', 'Work', 'Proyectos'], ['/docs/experience', 'Experience', 'Experiencia'], ['/docs/education', 'Education', 'Educación']];
export default function Navigation() {
  const pathname = usePathname() || '/';
  const es = pathname === '/es' || pathname.startsWith('/es/');
  const prefix = es ? '/es' : '';
  const otherPath = es ? pathname.replace(/^\/es(?=\/|$)/,'') || '/' : '/es' + (pathname === '/' ? '/' : pathname);
  const [dark, setDark] = useState(false);
  const [hash, setHash] = useState('');
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
    const update = () => setHash(window.location.hash);
    update();window.addEventListener('hashchange',update);
    return () => window.removeEventListener('hashchange',update);
  }, [pathname]);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('theme', next ? 'dark' : 'light'); }
  return <header className="header"><Link className="brand" href={`${prefix}/`} aria-label={es ? 'Inicio de Diego Romero' : 'Diego Romero home'}><span className="brand-mark">dr<span>.</span></span><span>Diego Romero</span></Link><nav aria-label={es ? 'Navegación principal' : 'Main navigation'}>{links.map(([href, en, spanish]) => <Link key={href} href={prefix+href} aria-current={pathname.replace(/\/$/, '') === prefix+href ? 'page' : undefined}>{es ? spanish : en}</Link>)}<a className="nav-contact" href={`${prefix}/#contact`}>{es ? 'Contactame' : 'Contact me'}</a><a className="nav-cv" href="/files/Diego-Romero-CV.pdf" download="Diego-Romero-CV.pdf" title={es ? 'CV en inglés (PDF)' : 'English CV (PDF)'}>{es ? 'Descargar CV' : 'Download CV'} <span aria-hidden="true">↓</span></a><a className="language-switch" href={otherPath+hash} hrefLang={es ? 'en' : 'es'} lang={es ? 'en' : 'es'} aria-label={es ? 'Read this page in English' : 'Leer esta página en español'}>{es ? 'English' : 'Español'}</a><button onClick={toggleTheme} aria-label={es ? `Cambiar a tema ${dark ? 'claro' : 'oscuro'}` : `Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? '☀' : '☾'}</button></nav></header>;
}
