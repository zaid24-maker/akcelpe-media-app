'use client';

import { useKit } from './KitProvider';

export default function Header() {
  const { setTab } = useKit();

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 -mx-[var(--gutter)] border-b border-line bg-surface px-[var(--gutter)]">
      <div className="wrap flex flex-wrap items-center gap-5 py-2.5">
        <a className="flex leading-none no-underline" href="https://akcelpe.com/" aria-label="AkcelPe home" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo.png"
            alt="AKCELPE — Payments Beyond Boundaries"
            className="h-auto w-[200px] max-w-full"
          />
        </a>

        <nav aria-label="Main" className="ml-auto flex flex-wrap gap-[22px] narrow:order-3 narrow:ml-0 narrow:w-full">
          <a className="font-medium text-muted no-underline hover:text-ink" href="https://akcelpe.com/" target="_blank" rel="noopener noreferrer">Home</a>
          <a className="font-medium text-muted no-underline hover:text-ink" href="https://akcelpe.com/company.html#careers" target="_blank" rel="noopener noreferrer">Careers</a>
          <a className="font-medium text-muted no-underline hover:text-ink" href="#hub" onClick={() => setTab('social')} target="_blank" rel="noopener noreferrer">Social</a>
        </nav>

        <a
          className="btn btn-red narrow:ml-auto"
          href="https://akcelpe.com/portal/signup.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </a>
      </div>
    </header>
  );
}
