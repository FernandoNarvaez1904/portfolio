import { pages } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap() { return ['/', ...pages.map(page => `/docs/${page.slug}/`)].map(route => ({ url: `https://diegoromero.dev${route}` })); }
