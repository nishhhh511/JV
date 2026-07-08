import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const navItems = ["Home", "About", "Journey", "Stats", "Gallery", "Contact"];

const heroStats = [
  ["5+", "Years Playing"],
  ["150+", "Matches"],
  ["3000+", "Runs Scored"],
  ["50+", "Wickets"],
];

const lifeMilestones = [
  {
    type: "Milestone",
    year: "2005",
    title: "Origin",
    place: "Vellore, Tamil Nadu",
    text: "The journey begins. Born with destiny written in the stars, in the ancient city known for its temples and heritage.",
  },
  {
    type: "Milestone",
    year: "2008",
    title: "New Horizon",
    place: "Bengaluru, Karnataka",
    text: "Moved to the Silicon Valley of India. A new chapter unfolds in the city that would shape dreams.",
  },
  {
    type: "Education",
    year: "2010",
    title: "Starting Steps",
    place: "Bettal School",
    text: "The foundation years. Where curiosity met learning, and a young mind began to bloom.",
  },
  {
    type: "Education",
    year: "2013",
    title: "Growth",
    place: "Sri Mithri English School",
    text: "Building character, forging friendships. The playground became the first battlefield of dreams.",
  },
  {
    type: "Education",
    year: "2016",
    title: "Rising Star",
    place: "New Baldwin International School Mandur",
    text: "Where passion met opportunity. The corridors echoed with ambition and the fields witnessed dedication.",
  },
  {
    type: "Achievement",
    year: "2017",
    title: "The Selection",
    place: "School Cricket Team",
    text: "6th standard. First major milestone. Selected for the school cricket team. The dream takes tangible shape.",
  },
  {
    type: "Education",
    year: "2024",
    title: "Engineering",
    place: "Reva University",
    text: "Electrical & Electronics Engineering. Where science meets sport. Merging intellect with athletic prowess.",
  },
  {
    type: "Education",
    year: "2025",
    title: "Current Era",
    place: "Garden City University",
    text: "BBAB Degree. The present chapter in the Garden City. Still writing the story, still chasing excellence.",
  },
];

const associations = [
  {
    status: "Active",
    years: "Present",
    mark: "K",
    name: "KSCA",
    title: "Karnataka State Cricket Association",
    text: "Official state cricket governing body. Training under elite coaching programs and competing in state-level tournaments.",
    tags: ["State Level Tournaments", "Elite Coaching", "Professional Training"],
  },
  {
    status: "Active",
    years: "Present",
    mark: "K",
    name: "KIOC",
    title: "KIOC Cricket Academy",
    text: "Premier cricket academy known for producing quality cricketers with world-class facilities and coaching.",
    tags: ["World-Class Facilities", "Technical Excellence", "Match Exposure"],
  },
  {
    status: "Active",
    years: "Present",
    mark: "M",
    name: "MBCA",
    title: "MBCA",
    text: "Dedicated cricket association focusing on nurturing talent and providing competitive match exposure.",
    tags: ["Talent Development", "Competition Focus", "Team Building"],
  },
  {
    status: "Alumni",
    years: "2019-2021",
    mark: "N",
    name: "Neon",
    title: "Neon Cricket Academy",
    text: "Foundation years of professional training. Building technical skills and match temperament.",
    tags: ["Skill Foundation", "Basic Techniques", "Cricket Fundamentals"],
  },
  {
    status: "Alumni",
    years: "2021-2022",
    mark: "V",
    name: "Vision",
    title: "Vision Cricket Academy",
    text: "Enhanced training programs focusing on advanced techniques and competitive mindset.",
    tags: ["Advanced Training", "Mental Conditioning", "Competition Prep"],
  },
  {
    status: "Alumni",
    years: "2022",
    mark: "J",
    name: "Jharkhand",
    title: "Jharkhand Cricket Circuits",
    text: "Exposure to different playing conditions and competitive cricket circuits across India.",
    tags: ["Multi-State Exposure", "Adaptability", "Match Experience"],
  },
];

const timeline = [
  ["2005", "Born in Vellore"],
  ["2008", "Moved to Bengaluru"],
  ["2015", "First Cricket Bat"],
  ["2017", "School Cricket Selection"],
  ["2018", "First Century"],
  ["2019", "Neon Cricket Academy"],
  ["2020", "Inter-School Champion"],
  ["2020", "District Selection"],
  ["2021", "Vision Cricket Academy"],
  ["2021", "All-Rounder Award"],
  ["2022", "Jharkhand Circuit"],
  ["2022", "200+ Match Wickets"],
  ["2023", "KSCA Registration"],
  ["2023", "State Camp Selection"],
  ["2024", "KIOC & MBCA Active"],
  ["2024", "500+ Career Runs"],
];

const statCards = [
  ["150+", "Matches Played"],
  ["3000+", "Runs Scored"],
  ["100+", "Highest Score"],
  ["25.0", "Average"],
  ["20", "Not Outs"],
];

const traits = [
  ["33%", "Discipline"],
  ["66%", "Consistency"],
  ["100%", "Leadership"],
  ["92%", "Confidence"],
  ["88%", "Focus"],
  ["85%", "Sportsmanship"],
];

const certificates = [
  {
    level: "State",
    kind: "Selection",
    title: "KSCA State Selection",
    body: "Karnataka State Cricket Association",
    role: "State Representative",
    date: "February 14, 2026",
    place: "Delhi Match - April 23, 2026",
    issuer: "KSCA Selection Committee",
    image: "/assets/certificate-1.jpeg",
  },
  {
    level: "District",
    kind: "Selection",
    title: "District Cricket Team Selection",
    body: "Karnataka Cricket Board",
    role: "Selected Player",
    date: "October 20, 2025",
    place: "Bengaluru, Karnataka",
    issuer: "Karnataka Cricket Board",
    image: "/assets/certificate-2.jpeg",
  },
  {
    level: "National",
    kind: "Championship",
    title: "8th All India National Goa Gold Cup",
    body: "T20 Cricket Championship 2021",
    role: "Team Winners",
    date: "October 19-22, 2021",
    place: "Madgaon, Goa",
    issuer: "T20 Cricket Association Goa",
    image: "/assets/certificate-3.jpeg",
  },
  {
    level: "Local",
    kind: "Match Performance",
    title: "Kioc Wolves Triumph Over YPR Bulls",
    body: "CricHeroes Times News",
    role: "Best Batter (35 runs off 28 balls)",
    date: "May 6, 2026",
    place: "Bengaluru, Karnataka",
    issuer: "CricHeroes Times",
    image: "/assets/certificate-4.jpeg",
  },
  {
    level: "Local",
    kind: "Match Performance",
    title: "Neon Aura Triumphs Over Neon Genesis",
    body: "CricHeroes Times News",
    role: "Star Performer (39 runs off 30 balls)",
    date: "May 7, 2026",
    place: "Bengaluru, Karnataka",
    issuer: "CricHeroes Times",
    image: "/assets/certificate-5.jpeg",
  },
];

const gallery = [
  ["Dreams at Chinnaswamy", "Stadium", "/assets/gallery-01.png"],
  ["Focus Mode", "Training", "/assets/gallery-02.png"],
  ["Karnataka Pride", "Portrait", "/assets/gallery-03.png"],
  ["KIOC Academy", "Academy", "/assets/gallery-04.png"],
  ["Perfect Cover Drive", "Action", "/assets/gallery-05.png"],
  ["The Pull Shot", "Action", "/assets/gallery-06.png"],
  ["Ready to Battle", "Action", "/assets/gallery-07.png"],
  ["Intense Practice", "Training", "/assets/gallery-08.png"],
  ["Defensive Stance", "Training", "/assets/gallery-09.png"],
  ["Under The Lights", "Stadium", "/assets/gallery-10.png"],
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-green-400">
      <span className="h-2 w-2 rounded-full bg-green-400" />
      {children}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#080b08]/85 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Jai Vignesh home">
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-red-500 via-red-700 to-red-950 shadow-lg shadow-red-500/20">
              <div className="absolute inset-1 rounded-full border border-white/15">
                <span className="absolute left-0 right-0 top-1/2 h-px bg-white/40" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white sm:text-base">
                JAI<span className="ml-0.5 text-green-400">VIGNESH</span>
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-zinc-500">Cricketer</span>
            </div>
          </a>

          <div className="hidden items-center rounded-xl border border-white/5 bg-white/[0.03] p-1 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-green-400">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-xl bg-green-500 px-6 py-2.5 text-sm font-bold text-black shadow-lg shadow-green-500/20 hover:bg-yellow-400 hover:shadow-yellow-400/20 lg:inline-flex">
            Connect
          </a>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="grid gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
        {open && (
          <div className="grid gap-1 border-t border-white/10 px-4 pb-4 lg:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-green-400">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function StaticBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(34,197,94,0.20),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(234,179,8,0.12),transparent_24%),linear-gradient(180deg,#060806_0%,#080a08_50%,#050605_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(rgba(34,197,94,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.10)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,5,0.84),transparent_40%,rgba(5,6,5,0.84)),linear-gradient(180deg,rgba(5,6,5,0.40),transparent_45%,#050605)]" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden pt-24">
      <StaticBackground />
      <div className="relative z-10 flex flex-1 items-center px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <SectionLabel>Student Athlete</SectionLabel>
          <h1 className="max-w-6xl text-[17vw] font-black leading-[0.85] tracking-normal text-white sm:text-[16vw] lg:text-[11rem]">
            JAI
            <span className="block text-green-400 text-glow-green">VIGNESH</span>
          </h1>
          <p className="mt-8 text-xl font-light text-zinc-400 md:text-2xl lg:text-3xl">
            Student. <span className="text-green-400">Cricketer.</span> <span className="text-yellow-400 text-glow-gold">Dream Chaser.</span>
          </p>
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
            {heroStats.map(([value, label]) => (
              <div key={label} className="border-l border-green-500/30 pl-4">
                <div className="text-4xl font-black text-white lg:text-5xl">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black shadow-lg shadow-green-500/20 hover:bg-yellow-400 hover:shadow-yellow-400/20">
              Get in Touch <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#journey" className="inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-4 text-sm font-bold uppercase tracking-wide text-yellow-300 hover:border-yellow-300/60 hover:bg-yellow-400/15">
              My Journey <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex items-end justify-between px-6 pb-8 text-xs uppercase tracking-[0.25em] text-zinc-500 md:px-12 lg:px-24">
        <span className="hidden md:inline"><span className="text-green-400">Est.</span> 2024</span>
        <span>Scroll</span>
        <div className="hidden gap-6 md:flex">
          <a href="https://www.instagram.com/jai_vignesh_80?igsh=MWp2eTdpdGI4M29ndA==" className="hover:text-green-400">IG</a>
          <a href="https://x.com/vjai5894?s=11" className="hover:text-green-400">TW</a>
          <a href="#gallery" className="hover:text-green-400">YT</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-4xl">
          <SectionLabel>The Journey</SectionLabel>
          <h2 className="section-title">My Story</h2>
          <p className="section-copy">From the ancient streets of Vellore to the bustling fields of Bengaluru. A chronicle of passion, persistence, and the pursuit of cricketing excellence.</p>
        </div>
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["19+", "Years of Journey"],
            ["5", "Schools Attended"],
            ["2017", "First Selection"],
            ["3", "Cities Lived"],
          ].map(([value, label]) => (
            <div key={label} className="stat-tile">
              <div>{value}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {lifeMilestones.map((item, index) => (
            <article key={`${item.year}-${item.title}`} className="premium-card">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-green-400">{item.type}</span>
                  <h3 className="mt-2 text-2xl font-black uppercase text-white">{item.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-zinc-500">{String(index + 1).padStart(2, "0")}</div>
                  <div className="text-xl font-black text-yellow-400">{item.year}</div>
                </div>
              </div>
              <p className="mb-4 text-sm font-semibold text-green-300">{item.place}</p>
              <p className="text-sm leading-7 text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-green-500/20 bg-green-500/5 p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-yellow-400">To Be Continued</p>
          <h3 className="mt-3 text-3xl font-black uppercase text-white">The Story Continues...</h3>
          <p className="mt-2 text-zinc-400">More chapters await</p>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section-shell bg-[#060806]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>The Cricket Path</SectionLabel>
            <h2 className="section-title">Forged Through Competition</h2>
            <p className="section-copy">A journey built across cities, academies, and countless hours on the pitch.</p>
            <p className="mt-6 leading-8 text-zinc-400">
              Jai Vignesh's cricket journey expanded beyond local grounds as he gained valuable experience playing across Goa, Delhi, Kochi, and Ranchi. Exposure to different playing conditions, teams, and competitive environments helped strengthen his match temperament, confidence, adaptability, and understanding of the game.
            </p>
            <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/5 p-6">
              <h3 className="text-xl font-bold text-white">Training Footprint</h3>
              <p className="mt-2 text-sm text-zinc-400">Cricket journey across multiple states of India</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Bengaluru", "Goa", "Delhi", "Kochi", "Ranchi", "Coimbatore"].map((city) => (
                  <span key={city} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-300">{city}</span>
                ))}
              </div>
              <div className="mt-6 text-4xl font-black text-green-400">6</div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Cities Played</div>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-black text-white">Academy Evolution</h3>
            <p className="mb-6 text-zinc-400">A twisted path of growth and excellence</p>
            <div className="grid gap-4">
              {associations.map((item, index) => (
                <article key={item.title} className="premium-card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-yellow-400 font-black text-black">{item.mark}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                        <span className={item.status === "Active" ? "text-green-400" : "text-yellow-400"}>{item.status}</span>
                        <span className="text-zinc-600">{item.years}</span>
                        <span className="ml-auto text-zinc-600">{index + 1}</span>
                      </div>
                      <h4 className="mt-2 text-xl font-bold text-white">{item.name}</h4>
                      <p className="text-sm font-semibold text-green-300">{item.title}</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-green-500/20 bg-green-500/5 px-3 py-1 text-xs text-zinc-300">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-black text-white">Cricket Timeline</h3>
          <p className="mt-2 text-zinc-400">16 key milestones marking the path from first bat to present day</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map(([year, title]) => (
              <div key={`${year}-${title}`} className="rounded-lg border border-green-500/20 bg-black/25 p-5">
                <div className="text-lg font-black text-green-400">{year}</div>
                <div className="mt-2 text-sm font-semibold text-zinc-200">{title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="stats" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Performance Analytics</SectionLabel>
          <h2 className="section-title">Performance By The Numbers</h2>
          <p className="section-copy">Every run, every match, every moment contributing to a bigger journey.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {statCards.map(([value, label]) => (
            <div key={label} className="stat-tile">
              <div>{value}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-green-500/20 bg-green-500/[0.04] p-6 md:p-8">
          <h3 className="mb-6 text-2xl font-black text-white">Key Traits</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {traits.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">{label}</span>
                  <span className="font-black text-green-400">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-yellow-400" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Core</p>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const [activeIdx, setActiveIdx] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-shell bg-[#060806]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Verified Achievements</SectionLabel>
          <h2 className="section-title">Certified Excellence</h2>
          <p className="section-copy">Official recognitions, selections, and media features documenting the journey of dedication and achievement.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {certificates.map((item, index) => (
            <article key={item.title} className="premium-card overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div 
                  className="relative group cursor-pointer overflow-hidden h-full min-h-64 flex items-center justify-center bg-black/40"
                  onClick={() => setActiveIdx(index)}
                >
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="rounded-full bg-white/20 backdrop-blur-md p-3 text-white border border-white/30 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-300">{item.level}</span>
                    <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-yellow-300">{item.kind}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-green-300">{item.body}</p>
                  <dl className="mt-6 grid gap-3 text-sm text-zinc-400">
                    <div><dt className="text-zinc-500">Role</dt><dd className="text-zinc-200">{item.role}</dd></div>
                    <div><dt className="text-zinc-500">Date</dt><dd className="text-zinc-200">{item.date}</dd></div>
                    <div><dt className="text-zinc-500">Location</dt><dd className="text-zinc-200">{item.place}</dd></div>
                    <div><dt className="text-zinc-500">Issuer</dt><dd className="text-zinc-200">{item.issuer}</dd></div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["5", "Total Features"],
            ["1", "Championships"],
            ["2", "State & District"],
            ["2", "Media Clippings"],
          ].map(([value, label]) => (
            <div key={label} className="stat-tile">
              <div>{value}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close button */}
          <button 
            type="button"
            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={() => setActiveIdx(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button 
            type="button"
            className="absolute left-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            type="button"
            className="absolute right-6 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/10 p-4 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image & Caption Wrapper */}
          <div 
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center justify-center scale-95 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={certificates[activeIdx].image} 
              alt={certificates[activeIdx].title} 
              className="max-h-[70vh] max-w-[80vw] rounded-lg object-contain shadow-2xl border border-white/10"
            />
            
            {/* Info details overlay at bottom */}
            <div className="mt-4 rounded-xl border border-white/10 bg-black/60 p-4 text-center backdrop-blur-md max-w-lg w-full">
              <div className="mb-2 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-green-300">{certificates[activeIdx].level}</span>
                <span className="rounded-full bg-yellow-400/20 px-2.5 py-0.5 text-yellow-300">{certificates[activeIdx].kind}</span>
              </div>
              <h3 className="text-lg font-black text-white">{certificates[activeIdx].title}</h3>
              <p className="mt-1 text-xs text-green-400 font-semibold">{certificates[activeIdx].body}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[11px] text-zinc-400">
                <span><strong className="text-zinc-500">Role:</strong> {certificates[activeIdx].role}</span>
                <span><strong className="text-zinc-500">Date:</strong> {certificates[activeIdx].date}</span>
                <span><strong className="text-zinc-500">Issuer:</strong> {certificates[activeIdx].issuer}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Gallery() {
  const filters = useMemo(() => [
    ["All", 10],
    ["Action", 3],
    ["Training", 3],
    ["Stadium", 2],
    ["Portrait", 1],
    ["Academy", 1],
  ], []);

  return (
    <section id="gallery" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>Visual Journal</SectionLabel>
            <h2 className="section-title">Through The Lens</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center sm:flex">
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 px-5 py-3">
              <div className="text-2xl font-black text-green-400">10</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Moments</div>
            </div>
            <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 px-5 py-3">
              <div className="text-2xl font-black text-yellow-400">2024-26</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Timeline</div>
            </div>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map(([name, count]) => (
            <span key={name} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-zinc-300">
              {name} <span className="text-green-400">{count}</span>
            </span>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map(([title, category, image], index) => (
            <article key={title} className="premium-card overflow-hidden p-0">
              <div className="relative">
                <img src={image} alt={title} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-300">{category}</div>
              </div>
              <div className="p-5">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">Gallery {String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-xl font-black text-white">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);
  const clearStatusTimer = useRef(null);

  // Place your EmailJS credentials in `.env` as VITE_EMAILJS_* variables.
  // These values are configured in Vercel environment settings for production.
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const resetStatusLater = (delay = 5000) => {
    window.clearTimeout(clearStatusTimer.current);
    clearStatusTimer.current = window.setTimeout(() => {
      setStatus({ type: "", text: "" });
    }, delay);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status.type === "error") {
      setStatus({ type: "", text: "" });
    }
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Please enter a valid email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Message is required.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", text: validationError });
      return;
    }

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setStatus({ type: "error", text: "Failed to send message. Please try again later." });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", text: "" });

    const templateParams = {
      to_email: "vjai5894@gmail.com",
      subject: "New Contact Form Submission - JV Website",
      from_name: form.name.trim(),
      from_email: form.email.trim(),
      message: form.message.trim(),
      body: `Name: ${form.name.trim()}\n\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`,
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        throw new Error(`EmailJS request failed with status ${response.status}`);
      }

      setStatus({ type: "success", text: "Thank you! Your message has been sent successfully." });
      setForm({ name: "", email: "", message: "" });
      resetStatusLater(6000);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({ type: "error", text: "Failed to send message. Please try again later." });
      resetStatusLater(6000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-[#060806]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Let's Connect</SectionLabel>
          <h2 className="section-title">Ready for the Next Challenge?</h2>
          <p className="section-copy">Whether you're looking to collaborate, discuss opportunities, or just say hi, I'm always open to connecting with like-minded individuals and exploring new possibilities.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-5">
            {[
              ["Email", "vjai5894@gmail.com"],
              ["Phone", "+91 7349575739"],
              ["Location", "Bengaluru, India"],
            ].map(([label, value]) => (
              <div key={label} className="premium-card">
                <h3 className="font-semibold text-white">{label}</h3>
                <p className="mt-2 text-sm text-zinc-400">{value}</p>
              </div>
            ))}
          </div>
          <form className="premium-card" onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <label className="grid gap-2 text-sm font-medium text-white">
                Your Name
                <input className="form-field" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white">
                Email Address
                <input className="form-field" name="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white">
                Message
                <textarea className="form-field min-h-32 resize-none" name="message" placeholder="Share your message or opportunity..." maxLength={5000} value={form.message} onChange={handleChange} />
              </label>
              <div className="flex justify-between text-xs text-zinc-500">
                <span>{form.message.length} characters</span>
                <span>{5000 - form.message.length} remaining</span>
              </div>
              <button type="submit" disabled={isSending} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-yellow-400 px-6 py-3 font-semibold text-black hover:shadow-lg hover:shadow-green-500/20 disabled:cursor-not-allowed disabled:opacity-70">
                {isSending ? "Sending..." : "Send Message"} <ArrowIcon className="h-5 w-5" />
              </button>
              {status.text ? (
                <p className={`text-sm font-medium ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>{status.text}</p>
              ) : null}
            </div>
          </form>
        </div>
        <div className="mt-14 border-t border-green-500/10 pt-10 text-center">
          <p className="mb-4 text-zinc-400">Follow my journey on social media for updates and insights</p>
          <div className="flex justify-center gap-4">
            <a href="https://x.com/vjai5894?s=11" target="_blank" rel="noreferrer" className="rounded-lg border border-green-500/20 px-4 py-2 text-sm font-medium text-zinc-400 hover:border-green-500/50 hover:text-green-400">X</a>
            <a href="https://www.instagram.com/jai_vignesh_80?igsh=MWp2eTdpdGI4M29ndA==" target="_blank" rel="noreferrer" className="rounded-lg border border-green-500/20 px-4 py-2 text-sm font-medium text-zinc-400 hover:border-green-500/50 hover:text-green-400">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-green-500/20 bg-[#050605]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-yellow-400 font-black text-black">JV</div>
            <span className="text-xl font-bold text-green-400">CRICKET</span>
          </div>
          <p className="text-sm leading-7 text-zinc-400">Premium cricket portfolio showcasing excellence on and off the field.</p>
          <p className="mt-4 text-sm text-green-400">Crafted with passion</p>
        </div>
        <FooterLinks title="Navigate" links={["Home", "About", "Gallery", "Journey"]} />
        <FooterLinks title="Information" links={["Stats", "Certificates", "Contact"]} targets={["stats", "gallery", "contact"]} />
        <div>
          <h3 className="mb-4 font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>Bengaluru, India</li>
            <li>vjai5894@gmail.com</li>
            <li>+91 7349575739</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links, targets }) {
  return (
    <div>
      <h3 className="mb-4 font-bold text-white">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={link}>
            <a className="text-zinc-400 hover:text-green-400" href={`#${targets?.[index] ?? link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Stats />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
