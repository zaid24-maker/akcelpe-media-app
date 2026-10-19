'use client';

import { useState } from 'react';

export default function CopyButton({ text, targetId }) {
  const [label, setLabel] = useState('Copy address');

  const flash = (msg) => {
    setLabel(msg);
    setTimeout(() => setLabel('Copy address'), 1500);
  };

  // clipboard na chale to address select kar dete hain
  const selectFallback = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    setLabel('Selected');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      flash('Copied');
    } catch {
      selectFallback();
    }
  };

  return (
    <button type="button" className="btn btn-ghost" onClick={copy}>
      {label}
    </button>
  );
}
