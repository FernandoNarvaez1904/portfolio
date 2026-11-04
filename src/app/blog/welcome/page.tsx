import { Content } from '@/lib/content';
export const metadata = { title: 'Welcome to My Blog', alternates: { canonical: '/blog/welcome/' } };
export default function Post() { return <article><p className="muted">January 1, 2024 · Diego Romero</p><Content file="blog/2024-01-01-welcome.md" /></article>; }
