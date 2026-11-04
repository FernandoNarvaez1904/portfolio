import { pages } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap() {
  const base = 'https://diegoromero.dev';
  return ['/', ...pages.map(page => `/docs/${page.slug}/`)].flatMap(route => [route, `/es${route}`].map(path => ({ url: base+path, alternates: { languages: { en: base+route, es: base+`/es${route}` } } })));
}
