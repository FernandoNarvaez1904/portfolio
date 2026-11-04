import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import TerminalBanner from '@/components/TerminalBanner';
import DiplomaFrame from '@/components/DiplomaFrame';
import type { Language } from './i18n';

export const pages = [
  { slug: 'intro', title: 'Welcome' },
  { slug: 'experience', title: 'My Work Experience' },
  { slug: 'education', title: 'My College Experience' },
  { slug: 'projects/storefront-pos', title: 'Storefront POS System' },
];
export function Content({ file, lang = 'en' }: { file: string; lang?: Language }) {
  const { content } = matter(fs.readFileSync(path.join(process.cwd(), file), 'utf8'));
  const source = content.replace(/^import .+;\s*$/gm, '').replace(/:::warning (.+)\n([\s\S]*?)\n:::/g, '> **$1**\n>\n> $2');
  return <MDXRemote source={source} components={{ TerminalBanner, DiplomaFrame: () => <DiplomaFrame lang={lang} /> }} />;
}
