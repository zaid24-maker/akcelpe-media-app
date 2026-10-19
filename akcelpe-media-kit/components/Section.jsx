export default function Section({ id, title, lead, children }) {
  return (
    <section className="border-t border-line py-9" id={id}>
      <h2 className="mb-2 text-[clamp(26px,3.4vw,38px)]">{title}</h2>
      {lead && <p className="mb-[22px] max-w-[62ch] text-muted">{lead}</p>}
      {children}
    </section>
  );
}
