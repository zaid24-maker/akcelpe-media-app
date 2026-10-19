/* ---- Yahan sab content edit karo. Empty url = "pending" dikhega. ---- */

export const SOCIALS = [
  { id: 'instagram', name: 'Instagram', sub: 'Follow our journey', url: 'https://www.instagram.com/akcelpe_?utm_source=ig_web_button_share_sheet&obrf=ZDNlZDc0MzIxNw==' },
  { id: 'bluesky', name: 'Bluesky', sub: 'Follow us on Bluesky', url: 'https://bsky.app/profile/akcelpe.bsky.social' },
  { id: 'tumblr', name: 'Tumblr', sub: 'Read our latest post', url: 'https://www.tumblr.com/akcelpe?source=share' },
  { id: 'x', name: 'X (Twitter)', sub: 'Latest updates', url: 'https://x.com/AKCELPE?s=20' },
  { id: 'youtube', name: 'YouTube', sub: 'Subscribe to our channel', url: 'https://www.youtube.com/@AKCELPE-Official' },
];

export const SOCIAL_ICON = {
  instagram: 'ig', bluesky: 'bluesky', tumblr: 'tumblr', x: 'x', youtube: 'yt',
};

export const APPS = [
  { name: 'Member portal', sub: 'Sign in to AkcelPe', url: 'https://akcelpe.com/portal.html' },
  { name: 'Mobile app', sub: 'Store link to be added', url: '' },
];

export const DOWNLOADS = [
  { name: 'Legal policies', meta: 'Draft', url: 'https://akcelpe.com/legal.html' },
  { name: 'Document register', meta: 'Live page', url: 'https://akcelpe.com/documents.html' },
  { name: 'Investor pitch (PDF)', meta: 'Download PDF', url: '/Investor%20Pitch.pdf', download: 'Investor Pitch.pdf' },
  { name: 'Business plan (PDF)', meta: 'Download PDF', url: '/Akcelpe%20Business%20Presentation%20.pdf', download: 'Akcelpe Business Presentation.pdf' },
];

export const RESOURCES = [
  { t: 'Legal and Compliance', k: 'document', d: 'Privacy policy, terms of use and risk disclosure, published as drafts.', tag: 'Draft documents', st: 'Live page', url: 'https://akcelpe.com/legal.html', a: '#D3202F', b: '#6E0E17', i: 'shield' },
  { t: 'Investor Pitch', k: 'document', d: 'Investor presentation for partners and eligible participants.', tag: 'PDF', st: 'Download PDF', url: '/Investor%20Pitch.pdf', download: 'Investor Pitch.pdf', a: '#0B8A4B', b: '#06311D', i: 'doc' },
  { t: 'Business Plan Presentation', k: 'document', d: 'Business plan presentation for the AKCEL ecosystem.', tag: 'PDF', st: 'Download PDF', url: '/Akcelpe%20Business%20Presentation%20.pdf', download: 'Akcelpe Business Presentation.pdf', a: '#D3202F', b: '#0F2A1D', i: 'doc' },
  { t: 'Upcoming Projects', k: 'document', d: 'Akcel Arena in Ras Al Khaimah, London and India.', tag: '3 regions', st: 'Live page', url: 'https://akcelpe.com/akcel-arena.html', a: '#0B8A4B', b: '#0F2A1D', i: 'pin' },
  { t: 'Current Projects', k: 'document', d: 'Project register, global presence and roadmap.', tag: 'Project register', st: 'Live page', url: 'https://akcelpe.com/projects.html', a: '#6E0E17', b: '#D3202F', i: 'grid' },
  { t: 'Group of Companies', k: 'document', d: 'Company profile, partners and the nine ecosystem verticals.', tag: 'Group profile', st: 'Live page', url: 'https://akcelpe.com/group.html', a: '#05381F', b: '#0B8A4B', i: 'group' },
  { t: 'Promotional Video', k: 'video', d: 'Short brand film introducing AkcelPe and the gateway.', tag: 'YouTube video', st: 'Watch video', url: 'https://youtu.be/HtvCKYu4uAM?si=AZexKedPWjx_I2Ax', a: '#0B8A4B', b: '#D3202F', i: 'play' },
  { t: 'Video Gallery', k: 'video', d: 'Official videos published on akcelpe.com.', tag: 'Gallery', st: 'Live page', url: 'https://akcelpe.com/videos.html', a: '#0F2A1D', b: '#D3202F', i: 'play' },
  { t: 'Trust Centre', k: 'document', d: 'Document register, governance and compliance approach.', tag: 'Verified facts', st: 'Live page', url: 'https://akcelpe.com/documents.html', a: '#D3202F', b: '#05381F', i: 'shield' },
];

export const STATS = [
  { value: '3', label: 'Operating regions: Dubai, London, India' },
  { value: '9', label: 'Connected ecosystem verticals' },
  { value: '500M', label: 'AKT maximum supply' },
  { value: 'BEP-20', label: 'Token standard on BNB Smart Chain' },
];

export const VERTICALS = [
  { name: 'Payments', status: 'Beta', text: 'Collection, settlement and merchant acceptance through AkcelPe.' },
  { name: 'Investments', status: 'Planned', text: 'Eligibility-gated opportunity categories.' },
  { name: 'Real Estate', status: 'Planned', text: 'Development projects and a proposed fractional model.' },
  { name: 'Sports and Akcel Arena', status: 'Planned', text: 'Integrated venues for sport, entertainment and dining.' },
  { name: 'Hospitality', status: 'Planned', text: 'Hotels, restaurants, resorts and booking.' },
  { name: 'Entertainment', status: 'Planned', text: 'Events, venues and live experiences.' },
  { name: 'Education', status: 'Planned', text: 'Programmes, training and institutional partnerships.' },
  { name: 'Media', status: 'Planned', text: 'Publishing, production and digital channels.' },
  { name: 'Technology', status: 'Beta', text: 'The platform, its digital services and applied technology.' },
];

export const PROJECTS = {
  current: [
    { name: 'AkcelPe platform', text: 'Wallet and balances, with design complete and build in progress. Technology vertical is in beta.' },
    { name: 'AKT token', text: 'BEP-20 contract deployed on BNB Smart Chain. Maximum supply 500,000,000 AKT.' },
  ],
  upcoming: [
    { name: 'Akcel Arena, Ras Al Khaimah', text: '300,000 sq ft sports and entertainment hub. Coming soon.' },
    { name: 'Akcel Arena, London', text: '10 acre flagship leisure destination. Coming soon.' },
    { name: 'Akcel Arena, India', text: '100+ acre integrated sports, tourism and lifestyle development. Coming soon.' },
  ],
};

// Tailwind ko poori class string chahiye, isliye gradient classes yahin likhi hain
export const FLYERS = [
  { bg: 'bg-[linear-gradient(160deg,#D3202F,#7C0F19)]', small: 'AkcelPe', title: 'Payments beyond boundaries', text: 'One wallet, one identity, one gateway to the AKCEL ecosystem.', foot: 'akcelpe.com' },
  { bg: 'bg-[linear-gradient(160deg,#0B8A4B,#05381F)]', small: 'Akcel Arena', title: 'Play beyond limits', text: 'Dubai · London · India. Sports, entertainment and lifestyle in one destination.', foot: 'Coming soon' },
  { bg: 'bg-[linear-gradient(160deg,#16251D,#0B8A4B_140%)]', small: 'AKCEL Group', title: 'One platform. Infinite opportunities.', text: 'Nine connected verticals across payments, real assets, sport, media and technology.', foot: 'akcelpe.com/ecosystem.html' },
];

export const BRAND_COLORS = [
  { label: 'Red #D3202F', bg: '#D3202F' },
  { label: 'Green #0B8A4B', bg: '#0B8A4B' },
  { label: 'White #FFFFFF', white: true },
  { label: 'Deep #0F2A1D', bg: '#0F2A1D' },
];

export const SCENES = [
  { title: 'Pay. Invest. Own. Grow.', sub: 'The digital gateway to the AKCEL Group', bg: 'linear-gradient(135deg,#D3202F,#6E0E17)' },
  { title: 'One wallet. One identity.', sub: 'Everything in one place with AkcelPe', bg: 'linear-gradient(135deg,#0B8A4B,#05381F)' },
  { title: 'Akcel Arena', sub: 'Dubai, London and India. Coming soon.', bg: 'linear-gradient(135deg,#0F2A1D,#D3202F)' },
  { title: 'Payments Beyond Boundaries', sub: 'akcelpe.com', bg: 'linear-gradient(135deg,#05381F,#0B8A4B)' },
];

export const CONTRACT = '0xcEcA4a0E9a713105B8eba18d01b6b2a425338a03';
export const CONTACT_EMAIL = 'akt@akcelpe.com';
