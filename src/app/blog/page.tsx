import Link from 'next/link';
export const metadata = { title: 'Blog', alternates: { canonical: '/blog/' } };
export default function Blog() { return <article><h1>Blog</h1><p>Thoughts on web development, technology, and the projects I’m building.</p><section className="blog-entry"><time dateTime="2024-01-01">January 1, 2024</time><h2><Link href="/blog/welcome">Welcome to My Blog</Link></h2><p>This is my first blog post. More content coming soon!</p><Link href="/blog/welcome">Read post →</Link></section></article>; }
