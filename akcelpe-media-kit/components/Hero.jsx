'use client';

import { useKit } from './KitProvider';
import { STATS } from '@/data/content';

export default function Hero() {
  const { openDemo } = useKit();

  return (
    <section className="grid grid-cols-[1.2fr_.8fr] items-center gap-8 pb-7 pt-11 narrow:grid-cols-1">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[.16em] text-green">
          AKCEL Group &middot; Media Kit
        </div>
        <h1 className="mb-3.5 mt-2.5 text-[clamp(38px,6vw,68px)] font-extrabold tracking-[-.02em]">
          Pay. Invest. Own. <em className="not-italic text-red">Grow.</em>
        </h1>
        <p className="mb-[22px] max-w-[56ch] text-[17px] text-muted">
          One place for the official AkcelPe and AKCEL Group resources: legal documents, investor pitch,
          business plan presentation, current and upcoming projects, group companies, videos, flyers and
          social channels.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn" href="#resources">Browse resources</a>
          <button className="btn btn-ghost" type="button" onClick={openDemo}>Watch sample video</button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3" aria-label="Group at a glance">
        {STATS.map((s, i) => (
          <div key={s.value} className="rounded-[14px] border border-line bg-surface p-4">
            <b className={`block font-display text-[30px] font-extrabold tabular-nums ${i === 1 ? 'text-red' : 'text-green'}`}>
              {s.value}
            </b>
            <span className="text-[13px] text-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
