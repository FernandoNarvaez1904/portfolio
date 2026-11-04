"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
const links = [['/docs/projects/storefront-pos', 'Work'], ['/docs/experience', 'Experience'], ['/docs/education', 'Education']];
export default function Navigation() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === 'dark'); }, []);
  function toggleTheme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('theme', next ? 'dark' : 'light'); }
  return <header className="header"><Link className="brand" href="/" aria-label="Diego Romero home"><span className="brand-mark">dr<span>.</span></span><span>Diego Romero</span></Link><nav aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname?.replace(/\/$/, '') === href ? 'page' : undefined}>{label}</Link>)}<a className="nav-cv" href="/files/Diego-Romero-CV.pdf" download="Diego-Romero-CV.pdf">Download CV <span aria-hidden="true">↓</span></a><button onClick={toggleTheme} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? '☀' : '☾'}</button></nav></header>;
}
