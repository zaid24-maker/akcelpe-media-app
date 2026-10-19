'use client';

import { useEffect, useRef, useState } from 'react';
import { useKit } from './KitProvider';
import { SCENES } from '@/data/content';

const SCENE_MS = 3000;
const TOTAL_MS = SCENE_MS * SCENES.length;

export default function VideoModal() {
  const { demoOpen, closeDemo } = useKit();
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const closeRef = useRef(null);

  // open hote hi reset + focus, Escape se close
  useEffect(() => {
    if (!demoOpen) return;
    setElapsed(0);
    setPaused(false);
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && closeDemo();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [demoOpen, closeDemo]);

  // looping timer
  useEffect(() => {
    if (!demoOpen || paused) return;
    const id = setInterval(() => setElapsed((e) => e + 100), 100);
    return () => clearInterval(id);
  }, [demoOpen, paused]);

  if (!demoOpen) return null;

  const index = Math.floor(elapsed / SCENE_MS) % SCENES.length;
  const scene = SCENES[index];
  const progress = ((elapsed % TOTAL_MS) / TOTAL_MS) * 100;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-[rgba(5,12,8,.8)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Sample video"
      onClick={(e) => e.target === e.currentTarget && closeDemo()}
    >
      <div className="w-[min(760px,100%)] overflow-hidden rounded-2xl bg-[#0B1410] text-white">
        <div
          className="relative grid aspect-video place-items-center p-6 text-center transition-[background] duration-[600ms]"
          style={{ background: scene.bg }}
        >
          <div>
            <h3 key={`h${index}`} className="animate-rise text-[clamp(24px,4.6vw,46px)] font-extrabold">
              {scene.title}
            </h3>
            <p key={`p${index}`} className="mt-2.5 animate-rise-late opacity-90">{scene.sub}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="cursor-pointer rounded-full border-0 bg-white px-4 py-2 text-[13px] font-semibold text-[#14201A]"
          >
            {paused ? 'Play' : 'Pause'}
          </button>
          <div className="h-1.5 flex-1 overflow-hidden rounded-[9px] bg-white/20">
            <i className="block h-full bg-[#33C27A]" style={{ width: `${progress}%` }} />
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeDemo}
            className="cursor-pointer rounded-full border-0 bg-white px-4 py-2 text-[13px] font-semibold text-[#14201A]"
          >
            Close
          </button>
        </div>
        <div className="px-4 pb-3 text-[11px] opacity-70">Sample video. Replace with the final Akcelpe video.</div>
      </div>
    </div>
  );
}
