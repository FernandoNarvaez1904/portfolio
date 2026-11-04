"use client";
import { translate, type Language } from '@/lib/i18n';
import { useRef } from "react";
export default function DiplomaFrame({ lang = 'en' }: { lang?: Language }) {
  const t = (text: string) => translate(lang, text);
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button className="diploma" onClick={() => dialog.current?.showModal()} aria-label={t("View diploma fullscreen")}><img src="/img/diploma.png" alt={t("Software Engineering diploma from Keiser University")} /><span>{t("Click to view fullscreen")}</span></button>
    <dialog ref={dialog} className="diploma-modal" onClick={event => { if(event.target === event.currentTarget) dialog.current?.close(); }}>
      <button onClick={() => dialog.current?.close()} autoFocus>{t("Close diploma ×")}</button>
      <img src="/img/diploma.png" alt={t("Software Engineering diploma from Keiser University")} />
    </dialog>
  </>;
}
