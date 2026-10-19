import Section from './Section';
import CopyButton from './CopyButton';
import {
  CONTACT_EMAIL, CONTRACT, FLYERS, PROJECTS, VERTICALS,
} from '@/data/content';

const itemCard = 'rounded-[14px] border border-line bg-surface px-4 py-3.5';

export function Group() {
  return (
    <Section
      id="group"
      title="Group of companies"
      lead="AKCEL is a group of operating businesses connected through the AkcelPe gateway. Each vertical carries the status shown on akcelpe.com."
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-3">
        {VERTICALS.map((v) => (
          <div key={v.name} className={itemCard}>
            <h3 className="mb-1 text-base">{v.name}</h3>
            <p className="mb-2 text-[13px] text-muted">{v.text}</p>
            <span className={`st${v.status === 'Planned' ? ' st-wait' : ''}`}>{v.status}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Column({ title, items, dot }) {
  return (
    <div>
      <h3 className="mb-3 flex items-center gap-2.5 text-xl">
        <i className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        {title}
      </h3>
      {items.map((p) => (
        <div key={p.name} className={`mb-2.5 ${itemCard}`}>
          <b className="font-display text-[17px]">{p.name}</b>
          <p className="mt-1 text-[13.5px] text-muted">{p.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Current and upcoming projects"
      lead="Status labels follow the official project register. Nothing marked Planned is operational yet."
    >
      <div className="grid grid-cols-2 gap-5 narrow:grid-cols-1">
        <Column title="Current" items={PROJECTS.current} dot="bg-green" />
        <Column title="Upcoming" items={PROJECTS.upcoming} dot="bg-red" />
      </div>
    </Section>
  );
}

export function Flyers() {
  return (
    <Section
      id="flyers"
      title="Flyers and promotional materials"
      lead="Sample layouts in the Akcelpe red, green and white theme. Replace them with your final artwork."
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {FLYERS.map((f) => (
          <div
            key={f.small}
            className={`relative flex aspect-[4/5] max-w-full flex-col justify-between overflow-hidden rounded-[14px] p-[22px] text-white after:absolute after:-bottom-[60px] after:-right-[60px] after:h-[220px] after:w-[220px] after:rounded-full after:bg-white/10 after:content-[''] ${f.bg}`}
          >
            <small className="text-[11px] uppercase tracking-[.16em] opacity-90">{f.small}</small>
            <div>
              <h3 className="relative z-[1] text-[30px] font-extrabold">{f.title}</h3>
              <p className="relative z-[1] mt-2 text-[13px] opacity-[.92]">{f.text}</p>
            </div>
            <div className="relative z-[1] font-mono text-[11px] font-semibold">{f.foot}</div>
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[12.5px] text-muted">Sample designs. They are not final brand artwork.</p>
    </Section>
  );
}

export function Verify() {
  return (
    <Section id="verify" title="Verify before you share">
      <div className="grid gap-3 rounded-2xl border border-line bg-surface p-5">
        <div>Official AKT contract on BNB Smart Chain (BEP-20)</div>
        <div className="flex flex-wrap items-center gap-2.5">
          <code
            id="addr"
            className="min-w-0 rounded-[10px] border border-line bg-bg px-3 py-2 font-mono text-[13px] font-medium [overflow-wrap:anywhere]"
          >
            {CONTRACT}
          </code>
          <CopyButton text={CONTRACT} targetId="addr" />
          <a
            className="btn btn-ghost"
            href={`https://bscscan.com/token/${CONTRACT}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on BscScan
          </a>
        </div>
        <div>Official contact: <b>{CONTACT_EMAIL}</b></div>
        <p className="max-w-[90ch] text-[12.5px] text-muted">
          Information only. No token sale is open and nothing here is an offer, solicitation or
          recommendation to buy any token, security or investment product, or financial, legal or tax
          advice. Programme figures may be illustrative and need their own approvals. AKCEL will never
          ask for a seed phrase or private key.
        </p>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="wrap grid gap-2 border-t border-line pb-10 pt-[26px] text-[13px] text-muted">
      <div><b>AKCELPE</b> &middot; Payments Beyond Boundaries</div>
      <div>
        &copy; 2026 AKCEL Group &middot; Dubai &middot; London &middot; India. All resources are official
        and updated when documents clear review.
      </div>
    </footer>
  );
}
