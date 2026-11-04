"use client";
import { translate, type Language } from '@/lib/i18n';
import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import { contactSiteKey } from '@/lib/contact-config';
type Turnstile = { render: (node: HTMLElement, options: Record<string, unknown>) => string; reset: (id: string) => void; remove: (id: string) => void };
declare global { interface Window { turnstile?: Turnstile } }
export default function ContactForm({ lang = 'en' }: { lang?: Language }) {
  const t = (text: string) => translate(lang, text);
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | undefined>(undefined);
  const [loaded,setLoaded] = useState(false);
  const [token,setToken] = useState('');
  const [busy,setBusy] = useState(false);
  const [notice,setNotice] = useState('');
  const [sent,setSent] = useState(false);
  useEffect(() => {
    if(!loaded || !container.current || !window.turnstile) return;
    widget.current=window.turnstile.render(container.current,{sitekey:contactSiteKey,action:'contact',theme:'auto',size:'flexible',language:lang,callback:(value:string)=>setToken(value),'expired-callback':()=>setToken(''),'error-callback':()=>{setToken('');setNotice(t("Security check unavailable. Reload this page or email me directly."));}});
    return () => {if(widget.current) window.turnstile?.remove(widget.current);};
  },[loaded,lang]);
  async function submit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if(busy || !token) return;
    const form=event.currentTarget;const data=new FormData(form);
    setBusy(true);setSent(false);setNotice('');
    try {
      const result=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:data.get('name'),email:data.get('email'),message:data.get('message'),website:data.get('website'),token}),signal:AbortSignal.timeout(20000)});
      const body=await result.json();setNotice(t(body.message || 'Unable to send. Please try again.'));
      if(result.ok){setSent(true);form.reset();}
    } catch {setNotice(t("Unable to send right now. Try again or email dfrn2003@gmail.com."));}
    finally {setBusy(false);setToken('');if(widget.current)window.turnstile?.reset(widget.current);}
  }
  return <section id="contact" className="contact-form-section"><div className="contact-details"><h2>{t("Get in touch")}</h2><p>{t("Tell me about your project or the role you’re hiring for.")}</p><a href="mailto:dfrn2003@gmail.com">dfrn2003@gmail.com</a><div className="contact-social"><a href="https://www.linkedin.com/in/diegoromero-dev/">LinkedIn</a><a href="https://github.com/FernandoNarvaez1904">GitHub</a></div></div><form onSubmit={submit} className="contact-form"><div className="contact-fields"><label>{t("Your name")}<input name="name" autoComplete="name" required minLength={2} maxLength={100}/></label><label>{t("Email address")}<input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div><label>{t("Message")}<textarea name="message" rows={5} required minLength={10} maxLength={5000}/></label><label className="form-honeypot" aria-hidden="true">{t("Leave this empty")}<input name="website" tabIndex={-1} autoComplete="off" /></label><div ref={container} className="turnstile-container"/><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={()=>setLoaded(true)} onError={()=>setNotice(t("Security check unavailable. Please email me directly."))}/><p className="form-privacy">{t("Your name, email, and message are emailed to me so I can reply.")}</p><button className="button primary" type="submit" disabled={busy || !token}>{t(busy?'Sending…':'Send message')}</button><p role="status" aria-live="polite" className={sent?'form-success':'form-notice'}>{notice}</p></form></section>;
}
