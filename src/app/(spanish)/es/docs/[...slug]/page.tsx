import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Content, pages } from '@/lib/content';
import { spanishTitles } from '@/lib/i18n';
export const dynamicParams = false;
export function generateStaticParams() { return pages.map(page => ({ slug: page.slug.split('/') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params; const route = `/docs/${slug.join('/')}/`;
  return { title: spanishTitles[slug.join('/')], alternates: { canonical: `/es${route}`, languages: { en: route, es: `/es${route}` } } };
}
export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const index = pages.findIndex(page => page.slug === slug.join('/'));
  if (index < 0) notFound();
  return <article><Content file={`docs/es/${pages[index].slug}.md`} lang="es" /><nav className="page-links" aria-label="Páginas relacionadas">{index > 0 && <Link href={`/es/docs/${pages[index - 1].slug}`}>← {spanishTitles[pages[index - 1].slug]}</Link>}{index < pages.length - 1 && <Link href={`/es/docs/${pages[index + 1].slug}`}>{spanishTitles[pages[index + 1].slug]} →</Link>}</nav></article>;
}
