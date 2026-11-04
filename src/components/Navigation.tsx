"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const links = [['/docs/intro', 'Welcome'], ['/docs/experience', 'My Work Experience'], ['/docs/education', 'My College Experience'], ['/docs/projects/storefront-pos', 'Storefront POS System']];
export default function Navigation() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('theme', next ? 'dark' : 'light'); }
  return <><header className="header"><Link className="brand" href="/"><img src="/img/logo.svg" alt="" width="30" height="30" />Diego Romero</Link><nav aria-label="Main navigation"><Link href="/docs/intro">Portfolio</Link><Link href="/blog">Blog</Link><a href="https://www.linkedin.com/in/diegoromero-dev/">LinkedIn ↗</a><a href="https://github.com/FernandoNarvaez1904/portfolio">GitHub ↗</a><button onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? '☀' : '☾'}</button></nav></header><aside className="sidebar"><nav aria-label="Portfolio pages">{links.map(([href, label], index) => <div key={href}>{index === 3 && <span className="category">Relevant Projects</span>}<Link href={href} aria-current={pathname?.replace(/\/$/, '') === href || (pathname === '/' && index === 0) ? 'page' : undefined}>{label}</Link></div>)}</nav></aside></>;
}
