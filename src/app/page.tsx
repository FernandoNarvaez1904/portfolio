import { Content } from '@/lib/content';
export const metadata = { alternates: { canonical: '/docs/intro/' } };
export default function Home() { return <article><Content file="docs/intro.md" /></article>; }
