import React from "react";

const fontStyle = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Barlow+Condensed:wght@400;500;600;700&display=swap');

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:#0d0d0d;
}

/* =========================
   SECTION
========================= */

.wrapper{
  min-height:100vh;
  padding:60px 40px;
  background:#0d0d0d;
}

.container{
  max-width:1300px;
  margin:auto;
}

.section-tag{
  font-family:'Barlow Condensed',sans-serif;
  font-size:11px;
  letter-spacing:.28em;
  text-transform:uppercase;
  color:#c8102e;
  margin-bottom:12px;
}

.section-title{
  font-family:'Cormorant Garamond',serif;
  font-size:56px;
  font-weight:300;
  color:#fff;
  line-height:1.1;
}

.section-title em{
  color:rgba(255,255,255,.35);
  font-style:italic;
}

.section-sub{
  margin-top:10px;
  font-family:'Cormorant Garamond',serif;
  font-size:18px;
  font-style:italic;
  color:rgba(255,255,255,.45);
}

/* =========================
   GRID
========================= */

.team-grid{
  margin-top:45px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
  gap:22px;
}

/* =========================
   CARD
========================= */

.card{
  position:relative;
  overflow:hidden;
  border-radius:22px;
  background:#171717;
  transition:
    transform .45s cubic-bezier(0.23,1,0.32,1),
    box-shadow .45s ease;
  cursor:pointer;
}

.card:hover{
  transform:translateY(-8px) scale(1.02);
  box-shadow:0 24px 48px rgba(200,16,46,.25);
}

/* =========================
   IMAGE AREA
========================= */

.img-wrap{
  position:relative;
  width:100%;
  aspect-ratio:3/4;
  overflow:hidden;

  /* default bg */
  background:#1b1b1b;

  transition:background .45s cubic-bezier(0.23,1,0.32,1);
}

/* red bg on hover */
.card:hover .img-wrap{
  background:#c8102e;
}

/* =========================
   IMAGE
========================= */

.img-wrap img{
  width:100%;
  height:100%;
  object-fit:contain;

  display:block;

  /* default B&W */
  filter:grayscale(100%) contrast(1.08);

  transition:
    transform .55s cubic-bezier(0.23,1,0.32,1),
    filter .45s ease;
}

/* colorful on hover */
.card:hover .img-wrap img{
  transform:scale(1.08);

  filter:
    grayscale(0%)
    contrast(1.05)
    saturate(1.1);
}

/* =========================
   INFO
========================= */

.info{
  padding:18px;
  background:#161616;
}

.name{
  font-family:'Barlow Condensed',sans-serif;
  font-size:18px;
  font-weight:700;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#fff;
}

.role{
  margin-top:6px;
  font-family:'Cormorant Garamond',serif;
  font-size:14px;
  font-style:italic;
  color:rgba(255,255,255,.5);
}
`;

const team = [
  {
    name: "Vishal Punjabi",
    role: "Director",
    img: "images.jfif"
  },
  {
    name: "Siddhi Kanakia",
    role: "Producer",
    img: "men3.webp"
  },
  {
    name: "Arjun Mehta",
    role: "Cinematographer",
    img: "men10.png"
  },
  {
    name: "Priya Sharma",
    role: "Creative Head",
    img: "men20.png"
  }
];

function TeamCard({ name, role, img }) {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={img} alt={name} />
      </div>

      <div className="info">
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

      <div className="wrapper">
        <div className="container">

          <p className="section-tag">
            — The Wedding Filmer
          </p>

          <h1 className="section-title">
            The Crew <em>Behind the Lens</em>
          </h1>

          <p className="section-sub">
            Hover the cards — image becomes colorful and the transparent background turns red.
          </p>

          <div className="team-grid">
            {team.map((member) => (
              <TeamCard
                key={member.name}
                {...member}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}