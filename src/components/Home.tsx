import { translate, type Language } from '@/lib/i18n';
import Link from 'next/link';
import ContactForm from './ContactForm';
export default function Home({ lang = 'en' }: { lang?: Language }) {
  const t = (text: string) => translate(lang, text);
  return <div className="home">
    <section className="hero">
      <div className="hero-copy"><h1>{t("Good software.")}<br />{t("From end to end.")}</h1><p className="hero-description">{t("I’m Diego Romero. I build the interfaces people use, the systems behind them, and the connections that make everything work.")}</p><div className="hero-actions"><a className="button primary" href="#contact">{t("Contact me")}</a><a className="text-link" href="/files/Diego-Romero-CV.pdf" download="Diego-Romero-CV.pdf">{t("Download CV ")}<span aria-hidden="true">↓</span></a></div></div>
      <div className="system-art" aria-label={t("My work connects interfaces, backend systems, and integrations")}><div className="art-grid" /><div className="art-title">{t("From an idea to a working system")}</div><div className="system-layer layer-front"><span className="layer-icon">⌘</span><div><strong>{t("The interface")}</strong><span>React / Next.js / Electron</span></div><span className="layer-dot" /></div><div className="connector">↓</div><div className="system-layer layer-back"><span className="layer-icon">&#123; &#125;</span><div><strong>{t("The engine")}</strong><span>Node.js / Python / PostgreSQL</span></div><span className="layer-dot" /></div><div className="connector">↓</div><div className="system-layer layer-connect"><span className="layer-icon">⇄</span><div><strong>{t("The connections")}</strong><span>{t("Payments / APIs / AI agents")}</span></div><span className="layer-dot" /></div><div className="art-caption"><span>{t("One connected experience.")}</span><span aria-hidden="true">↗</span></div></div>
    </section>
    <section className="featured" aria-labelledby="project-heading"><Link href={(lang === "es" ? "/es" : "") + "/docs/projects/storefront-pos"} className="project-feature"><div className="project-info"><h2 id="project-heading">Storefront POS</h2><span className="project-kind">{t("In production · Used by real customers")}</span><p>{t("A production retail platform used by real customers in Nicaragua to manage sales, inventory, purchasing, accounting, and reporting across web and desktop.")}</p><div className="tags"><span>Electron</span><span>React</span><span>{t("Payments")}</span></div><span className="project-action">{t("Explore the project ")}<span aria-hidden="true">↗</span></span></div><div className="project-image"><img src="/img/storefront/desktop-grid.webp" alt={t("Storefront desktop POS product grid with prices, stock quantities, and the current sale")} /></div></Link></section>
    <section className="experience-showcase" aria-labelledby="experience-title">
      <div className="section-heading"><h2 id="experience-title">{t("Work experience")}</h2><Link className="text-link" href={(lang === "es" ? "/es" : "") + "/docs/experience"}>{t("Full work history ")}<span aria-hidden="true">↗</span></Link></div>
      <div className="experience-cards">
        <article className="experience-card"><p className="job-period">{t("October 2024–present")}</p><h3>Ahinko International</h3><p className="job-role">{t("Full-stack web developer")}</p><p>{t("Connecting business platforms and building internal tools, from WordPress and Node.js integrations to React applications backed by FastAPI.")}</p></article>
        <article className="experience-card"><p className="job-period">{t("January–July 2026")}</p><h3>Validia AI</h3><p className="job-role">{t("Part-time / freelance developer")}</p><p>{t("Built AI chat tools, research pipelines, and interfaces for AI experiments. Connected tool calling, code execution, and authentication across applications.")}</p></article>
        <article className="experience-card"><p className="job-period">{t("June–October 2024")}</p><h3>American Nicaraguan School</h3><p className="job-role">{t("Full-stack web developer")}</p><p>{t("Launched an after-school enrollment platform for families and supported programming education through hands-on robotics and competition projects.")}</p></article>
      </div>
    </section>
    <ContactForm lang={lang} />
  </div>;
}
