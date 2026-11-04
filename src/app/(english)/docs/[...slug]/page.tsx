import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Content, pages } from '@/lib/content';
export const dynamicParams = false;
export function generateStaticParams() { return pages.map(page => ({ slug: page.slug.split('/') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return { title: pages.find(page => page.slug === slug.join('/'))?.title, alternates: { canonical: `/docs/${slug.join('/')}/`, languages: { en: `/docs/${slug.join('/')}/`, es: `/es/docs/${slug.join('/')}/` } } };
}
export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const index = pages.findIndex(page => page.slug === slug.join('/'));
  if (index < 0) notFound();
  return <article><Content file={`docs/${pages[index].slug}.md`} /><nav className="page-links" aria-label="Adjacent pages">{index > 0 && <Link href={`/docs/${pages[index - 1].slug}`}>← {pages[index - 1].title}</Link>}{index < pages.length - 1 && <Link href={`/docs/${pages[index + 1].slug}`}>{pages[index + 1].title} →</Link>}</nav></article>;
}
