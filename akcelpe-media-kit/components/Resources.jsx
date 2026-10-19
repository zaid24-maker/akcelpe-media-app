'use client';

import { useState } from 'react';
import Icon from './Icon';
import { useKit } from './KitProvider';
import { RESOURCES } from '@/data/content';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'video', label: 'Videos' },
  { id: 'document', label: 'Documents' },
];

const actionCls = 'cursor-pointer border-0 bg-transparent p-0 text-[13px] font-semibold text-green no-underline';

function Card({ r, openDemo }) {
  const isDemo = r.url === 'demo';
  const isDownload = Boolean(r.download);
  const isLinkedVideo = r.k === 'video' && !isDemo && !isDownload && Boolean(r.url);
  const wait = !r.url;

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div
        className="relative grid aspect-video place-items-center overflow-hidden bg-[linear-gradient(135deg,var(--a),var(--b))] text-white before:absolute before:inset-0 before:content-[''] before:bg-[repeating-linear-gradient(115deg,rgba(255,255,255,.08)_0_2px,transparent_2px_22px)]"
        style={{ '--a': r.a, '--b': r.b }}
      >
        <Icon name={r.i} className="relative h-14 w-14 opacity-95" />
        <span className="absolute right-2.5 top-2.5 grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-white/90 text-red">
          <Icon name={r.k === 'video' ? 'play' : 'doc'} className="h-[17px] w-[17px]" />
        </span>
        <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold">
          {r.tag}
        </span>
        {(isDemo || isLinkedVideo || (isDownload && r.k === 'video')) && (
          isLinkedVideo ? (
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${r.t}`}
              className="absolute inset-0 grid cursor-pointer place-items-center"
            >
              <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-white/95 text-red shadow-[0_6px_18px_rgba(0,0,0,.3)]">
                <Icon name="play" className="h-6 w-6" />
              </span>
            </a>
          ) : isDownload ? (
            <a
              href={r.url}
              download={r.download}
              aria-label={`Download ${r.download}`}
              className="absolute inset-0 grid cursor-pointer place-items-center"
            >
              <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-white/95 text-red shadow-[0_6px_18px_rgba(0,0,0,.3)]">
                <Icon name="play" className="h-6 w-6" />
              </span>
            </a>
          ) : (
            <button
              type="button"
              aria-label="Play sample video"
              onClick={openDemo}
              className="absolute inset-0 grid cursor-pointer place-items-center border-0 bg-transparent"
            >
              <span className="grid h-[54px] w-[54px] place-items-center rounded-full bg-white/95 text-red shadow-[0_6px_18px_rgba(0,0,0,.3)]">
                <Icon name="play" className="h-6 w-6" />
              </span>
            </button>
          )
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg">{r.t}</h3>
        <p className="text-[13.5px] text-muted">{r.d}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-1.5">
          {isDownload ? (
            <a className={actionCls} href={r.url} download={r.download}>
              {r.k === 'video' ? 'Play sample' : 'Download PDF'} &rarr;
            </a>
          ) : isDemo ? (
            <button type="button" className={actionCls} onClick={openDemo}>Play sample &rarr;</button>
          ) : isLinkedVideo ? (
            <a className={actionCls} href={r.url} target="_blank" rel="noopener noreferrer">
              Watch video &rarr;
            </a>
          ) : wait ? (
            <span className="text-[13px] font-medium text-muted">Coming soon</span>
          ) : (
            <a className={actionCls} href={r.url}>Explore resource &rarr;</a>
          )}
          <span className={`st${wait || r.st === 'Sample' ? ' st-wait' : ''}`}>{r.st}</span>
        </div>
      </div>
    </article>
  );
}

export default function Resources() {
  const [filter, setFilter] = useState('all');
  const { openDemo } = useKit();
  const list = RESOURCES.filter((r) => filter === 'all' || r.k === filter);

  return (
    <div id="resources">
      <div className="mb-1.5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-[34px]">Media Resources</h2>
          <p className="mt-1.5 text-muted">Official documents and videos from AkcelPe and the AKCEL Group.</p>
        </div>
        <div className="flex gap-1 rounded-full border border-line bg-surface p-1" role="group" aria-label="Filter">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`cursor-pointer rounded-full border-0 px-4 py-2 text-[13px] font-semibold ${
                filter === f.id ? 'bg-ink text-bg' : 'bg-transparent text-muted'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 mt-3.5 text-[13px] text-muted">{list.length} resources available</div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[18px]">
        {list.map((r) => (
          <Card key={r.t} r={r} openDemo={openDemo} />
        ))}
      </div>
    </div>
  );
}
