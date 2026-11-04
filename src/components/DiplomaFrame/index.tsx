"use client";
import { useRef } from "react";
export default function DiplomaFrame() {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <button className="diploma" onClick={() => dialog.current?.showModal()} aria-label="View diploma fullscreen"><img src="/img/diploma.png" alt="Software Engineering diploma from Keiser University" /><span>Click to view fullscreen</span></button>
    <dialog ref={dialog} className="diploma-modal" onClick={event => { if(event.target === event.currentTarget) dialog.current?.close(); }}>
      <button onClick={() => dialog.current?.close()} autoFocus>Close diploma ×</button>
      <img src="/img/diploma.png" alt="Software Engineering diploma from Keiser University" />
    </dialog>
  </>;
}
