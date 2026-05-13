import { useState } from "react";

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Barlow+Condensed:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ─── Section 1: Red bg on hover ─── */
  .card-red {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.42s cubic-bezier(0.23,1,0.32,1), box-shadow 0.42s ease;
  }
  .card-red:hover {
    transform: translateY(-7px) scale(1.025);
    box-shadow: 0 24px 48px rgba(200,16,46,0.32);
  }
  .card-red .bg {
    position: absolute; inset: 0; z-index: 0;
    background: #1c1c1c;
    transition: background 0.42s cubic-bezier(0.23,1,0.32,1);
  }
  .card-red:hover .bg { background: #c8102e; }

  .card-red .img-wrap {
    position: relative; z-index: 1;
    width: 100%; aspect-ratio: 3/4; overflow: hidden;
  }
  .card-red .img-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    filter: grayscale(100%) contrast(1.08);
    transition: transform 0.52s cubic-bezier(0.23,1,0.32,1), filter 0.42s ease;
  }
  .card-red:hover .img-wrap img {
    transform: scale(1.07);
    filter: grayscale(100%) contrast(1.12) brightness(0.72);
  }
  .card-red .info {
    position: relative; z-index: 1;
    padding: 14px 18px 18px;
  }
  .card-red .name {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700; font-size: clamp(14px,1.8vw,18px);
    letter-spacing: 0.13em; text-transform: uppercase; color: #fff; line-height: 1.1;
  }
  .card-red .role {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300; font-style: italic;
    font-size: clamp(11px,1.2vw,13px);
    color: rgba(255,255,255,0.48);
    margin-top: 5px;
    transition: color 0.35s ease;
  }
  .card-red:hover .role { color: rgba(255,255,255,0.82); }
  .card-red::after {
    content: '';
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 55%);
    opacity: 0; transition: opacity 0.4s ease;
  }
  .card-red:hover::after { opacity: 1; }

  /* ─── Section 2: B&W → Color on hover ─── */
  .card-bwc {
    position: relative;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    background: #111;
    transition: transform 0.42s cubic-bezier(0.23,1,0.32,1), box-shadow 0.42s ease;
  }
  .card-bwc:hover {
    transform: translateY(-7px) scale(1.025);
    box-shadow: 0 24px 48px rgba(0,0,0,0.55);
  }
  .card-bwc .img-wrap {
    position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden;
  }
  .card-bwc .img-bw,
  .card-bwc .img-col {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: opacity 0.58s cubic-bezier(0.23,1,0.32,1), transform 0.58s cubic-bezier(0.23,1,0.32,1);
  }
  .card-bwc .img-bw {
    filter: grayscale(100%) contrast(1.1);
    opacity: 1; transform: scale(1);
  }
  .card-bwc .img-col {
    filter: saturate(1.25) contrast(1.05);
    opacity: 0; transform: scale(1.05);
  }
  .card-bwc:hover .img-bw { opacity: 0; transform: scale(1.08); }
  .card-bwc:hover .img-col { opacity: 1; transform: scale(1.08); }

  .card-bwc .overlay {
    position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
    padding: 52px 18px 18px;
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
  }
  .card-bwc .name {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700; font-size: clamp(14px,1.8vw,18px);
    letter-spacing: 0.13em; text-transform: uppercase; color: #fff; line-height: 1.1;
  }
  .card-bwc .role {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300; font-style: italic;
    font-size: clamp(11px,1.2vw,13px);
    color: rgba(255,255,255,0.55); margin-top: 4px;
  }
  .card-bwc .qmark {
    position: absolute; top: 14px; left: 16px; z-index: 4;
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px; font-weight: 600; line-height: 1;
    color: rgba(200,160,60,0);
    transition: color 0.45s ease;
    pointer-events: none;
  }
  .card-bwc:hover .qmark { color: rgba(200,160,60,0.9); }

  /* badge pill on color card */
  .card-bwc .badge {
    position: absolute; top: 14px; right: 14px; z-index: 4;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 100px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.0);
    border: 0.5px solid rgba(255,255,255,0.0);
    transition: color 0.4s ease, border-color 0.4s ease, background 0.4s ease;
    pointer-events: none;
  }
  .card-bwc:hover .badge {
    color: rgba(255,255,255,0.7);
    border-color: rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.1);
  }

  .section-tag {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase;
    color: #c8102e; margin-bottom: 10px;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(30px,5vw,52px);
    font-weight: 300; letter-spacing: -0.01em; line-height: 1.1; color: #fff;
  }
  .section-title em {
    font-style: italic; color: rgba(255,255,255,0.32);
  }
  .section-sub {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(13px,1.5vw,16px);
    font-weight: 300; font-style: italic;
    color: rgba(255,255,255,0.36);
    margin-top: 8px; max-width: 440px;
  }
  .divider-line {
    height: 1px; margin: clamp(40px,6vw,72px) 0;
    background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.12) 70%, transparent 100%);
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(clamp(140px,18vw,220px), 1fr));
    gap: clamp(10px,2vw,20px);
    margin-top: clamp(24px,4vw,44px);
  }
`;

const team1 = [
  { name: "Vishal Punjabi",    role: "Director",           img: "https://i.pravatar.cc/400?img=11" },
  { name: "Siddhi Kanakia",    role: "Producer",           img: "https://i.pravatar.cc/400?img=47" },
  { name: "Swapnali Murudkar", role: "Accountant",         img: "https://i.pravatar.cc/400?img=45" },
  { name: "Vijay Kumar Singh", role: "Editor",             img: "https://i.pravatar.cc/400?img=12" },
  { name: "Arjun Mehta",       role: "Cinematographer",    img: "https://i.pravatar.cc/400?img=15" },
  { name: "Priya Sharma",      role: "Creative Head",      img: "https://i.pravatar.cc/400?img=48" },
  { name: "Rohit Desai",       role: "Sound Designer",     img: "https://i.pravatar.cc/400?img=52" },
  { name: "Neha Kulkarni",     role: "Colorist",           img: "https://i.pravatar.cc/400?img=44" },
];

const team2 = [
  { name: "Kabir Anand",    role: "Dir. of Photography", img: "https://i.pravatar.cc/400?img=13" },
  { name: "Meera Joshi",    role: "Wedding Planner",     img: "https://i.pravatar.cc/400?img=46" },
  { name: "Suresh Pillai",  role: "Drone Operator",      img: "https://i.pravatar.cc/400?img=53" },
  { name: "Ankita Rao",     role: "Makeup & Styling",    img: "https://i.pravatar.cc/400?img=49" },
  { name: "Dev Malhotra",   role: "Post Production",     img: "https://i.pravatar.cc/400?img=17" },
  { name: "Sonali Verma",   role: "Client Relations",    img: "https://i.pravatar.cc/400?img=43" },
  { name: "Faisal Khan",    role: "Lead Photographer",   img: "https://i.pravatar.cc/400?img=57" },
  { name: "Ritika Nair",    role: "Motion Graphics",     img: "https://i.pravatar.cc/400?img=41" },
];

function RedCard({ name, role, img }) {
  return (
    <div className="card-red">
      <div className="bg" />
      <div className="img-wrap">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="role">( {role} )</div>
      </div>
    </div>
  );
}

function ColorCard({ name, role, img }) {
  return (
    <div className="card-bwc">
      <div className="img-wrap">
        <img className="img-bw"  src={img} alt={name} loading="lazy" />
        <img className="img-col" src={img} alt="" loading="lazy" aria-hidden="true" />
      </div>
      <div className="qmark">"</div>
      <div className="badge">Colour</div>
      <div className="overlay">
        <div className="name">{name}</div>
        <div className="role">( {role} )</div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <style>{fontStyle}</style>
      <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: "clamp(28px,6vw,80px) clamp(14px,5vw,60px)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>

          {/* ══ SECTION 1 ══ */}
          <p className="section-tag">— The Wedding Filmer</p>
          <h2 className="section-title">The Crew <em>Behind the Lens</em></h2>
          <p className="section-sub">Hover a card — the team's signature red speaks for itself.</p>

          <div className="team-grid">
            {team1.map((m) => <RedCard key={m.name} {...m} />)}
          </div>

          {/* ── divider ── */}
          <div className="divider-line" />

          {/* ══ SECTION 2 ══ */}
          <p className="section-tag">— The Artists</p>
          <h2 className="section-title">Vision <em>in Colour</em></h2>
          <p className="section-sub">Black &amp; white by default — hover to reveal the colour beneath.</p>

          <div className="team-grid">
            {team2.map((m) => <ColorCard key={m.name} {...m} />)}
          </div>

        </div>
      </div>
    </>
  );
}