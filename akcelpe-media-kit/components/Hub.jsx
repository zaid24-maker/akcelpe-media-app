'use client';

import Icon from './Icon';
import { useKit } from './KitProvider';
import { DOWNLOADS, SOCIALS, SOCIAL_ICON } from '@/data/content';

const TABS = [
  { id: 'social', label: 'Social Media', icon: 'share' },
  { id: 'downloads', label: 'Quick Downloads', icon: 'down' },
];

function SocItem({ icon, name, sub, url }) {
  const inner = (
    <>
      <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-white/[.18]">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span>
        <b className="block text-sm">{name}</b>
        <small className="text-xs opacity-[.85]">{sub}</small>
      </span>
    </>
  );
  return <a className="soc" href={url} target="_blank" rel="noopener noreferrer">{inner}</a>;
}

export default function Hub() {
  const { tab, setTab } = useKit();

  return (
    <aside
      id="hub"
      aria-label="Quick access hub"
      className="sticky top-[calc(env(safe-area-inset-top,0px)+76px)] rounded-[18px] border border-line bg-surface p-[18px] narrow:static"
    >
      <h2 className="mb-3 text-[21px]">Quick Access Hub</h2>

      <div className="mb-3.5 flex flex-col gap-1" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`flex cursor-pointer items-center gap-2.5 rounded-[10px] border-0 px-3 py-2.5 text-left text-sm font-medium ${
              tab === t.id ? 'bg-green text-onaccent' : 'bg-transparent text-muted'
            }`}
          >
            <Icon name={t.icon} className="h-4 w-4 flex-none" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="border-t border-line pt-3.5">
        {tab === 'social' && (
          <>
            <p className="mb-3 text-[13px] text-muted">Connect with us on social platforms.</p>
            {SOCIALS.map((s) => (
              <SocItem key={s.id} icon={SOCIAL_ICON[s.id]} name={s.name} sub={s.sub} url={s.url} />
            ))}
          </>
        )}

        {tab === 'downloads' &&
          DOWNLOADS.map((d) => {
            const row = 'download-row flex items-center justify-between gap-2.5 border-b border-line py-[11px] text-sm no-underline';
            const meta = <span className="text-xs text-muted">{d.meta}</span>;
            return (
              <a key={d.name} className={row} href={d.url} download={d.download}>{d.name}{meta}</a>
            );
          })}

      </div>
    </aside>
  );
}
