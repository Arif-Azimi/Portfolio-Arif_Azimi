import { SplineScene } from './ui/SplineScene'
import { Spotlight } from './ui/Spotlight'

export function Hero() {
  return <section id="home" className="hero-section">
    <div className="hero-noise" />
    <div className="hero-grid">
      <div className="animate-fade-in-up hero-copy-wrap">
        <span className="availability"><i /> Available for opportunities</span>
        <p className="eyebrow">Software Development · Quality Assurance · Data</p>
        <h1>Muhammad Arif Azimi<br /><span>Professional Portfolio.</span></h1>
        <p className="hero-copy">Computer Science graduate specialising in software development, quality assurance and data—turning ideas into reliable, thoughtful digital solutions.</p>
        <div className="hero-actions"><a href="#projects" className="btn-primary">Explore Projects <b>↗</b></a><a href="#about" className="btn-outline">More About Me</a></div>
        <div className="hero-stats"><div><strong>3.40</strong><span>BSc CGPA</span></div><div><strong>3.59</strong><span>Diploma CGPA</span></div><div><strong>2026</strong><span>Internship</span></div></div>
      </div>
      <div className="robot-stage animate-fade-in-up-delay">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        <div className="robot-label"><span>Interactive 3D</span><strong>Drag to explore</strong></div>
      </div>
    </div>
    <div className="scroll-cue">SCROLL <span>↓</span></div>
    <style>{`
      .hero-section{min-height:100vh;display:flex;align-items:center;padding:8rem 3rem 5rem;position:relative;z-index:1;overflow:hidden}.hero-noise{position:absolute;inset:0;opacity:.18;pointer-events:none;background-image:radial-gradient(rgba(255,255,255,.12) .7px,transparent .7px);background-size:22px 22px;mask-image:linear-gradient(to bottom,black,transparent)}
      .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:3rem;align-items:center;width:100%;max-width:1280px;margin:auto}.hero-copy-wrap{position:relative;z-index:3}.availability{display:inline-flex;align-items:center;gap:.55rem;padding:.5rem .8rem;border:1px solid var(--border);border-radius:50px;background:rgba(13,21,38,.65);font-size:.7rem;color:#a9bddb;margin-bottom:1.5rem}.availability i{width:7px;height:7px;background:#5dff9a;border-radius:50%;box-shadow:0 0 12px #5dff9a}.eyebrow{font-size:.7rem;letter-spacing:3px;color:var(--accent);text-transform:uppercase;margin-bottom:1rem}.hero-section h1{font-family:Syne,sans-serif;font-size:clamp(3.2rem,6vw,5.8rem);line-height:.95;margin-bottom:1.7rem;font-weight:800;letter-spacing:-3px}.hero-section h1 span{background:linear-gradient(100deg,var(--accent),#91eaff 42%,var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.hero-copy{color:var(--muted);font-size:1.05rem;line-height:1.8;max-width:560px;margin-bottom:2rem}.hero-actions{display:flex;gap:1rem;flex-wrap:wrap}.btn-primary,.btn-outline{display:inline-block;padding:.82rem 1.65rem;border-radius:12px;font-weight:600;font-size:.86rem;text-decoration:none;transition:.25s}.btn-primary{background:linear-gradient(135deg,var(--accent),#68deff);color:#04101b;box-shadow:0 12px 35px rgba(0,200,255,.2)}.btn-outline{border:1px solid var(--border);color:var(--text);background:rgba(255,255,255,.02)}.btn-primary:hover,.btn-outline:hover{transform:translateY(-3px)}.hero-stats{display:flex;gap:2rem;margin-top:2.4rem}.hero-stats div{display:flex;flex-direction:column}.hero-stats strong{font-family:Syne,sans-serif;font-size:1.25rem}.hero-stats span{font-size:.68rem;color:var(--muted);margin-top:.15rem}
      .robot-stage{position:relative;height:610px;border-radius:28px;overflow:hidden;border:1px solid var(--border);background:radial-gradient(circle at 50% 45%,#132b50 0%,#091326 55%,var(--bg) 100%);box-shadow:0 35px 90px rgba(0,0,0,.38)}.robot-stage:after{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 80px rgba(0,200,255,.06);pointer-events:none}.robot-label{position:absolute;z-index:3;left:1.2rem;bottom:1.2rem;display:flex;flex-direction:column;padding:.8rem 1rem;border:1px solid var(--border);border-radius:12px;background:rgba(5,10,20,.76);backdrop-filter:blur(12px)}.robot-label span{font-size:.6rem;letter-spacing:2px;text-transform:uppercase;color:var(--accent)}.robot-label strong{font-size:.78rem;margin-top:.2rem}.scroll-cue{position:absolute;bottom:1.5rem;left:50%;transform:translateX(-50%);font-size:.6rem;letter-spacing:3px;color:var(--muted)}.scroll-cue span{color:var(--accent);margin-left:.5rem}
      @media(max-width:920px){.hero-grid{grid-template-columns:1fr}.robot-stage{height:520px}.scroll-cue{display:none}}@media(max-width:560px){.hero-section{padding:7rem 1.5rem 4rem}.robot-stage{height:430px}.hero-stats{gap:1.2rem}.hero-section h1{letter-spacing:-2px}}
    `}</style>
  </section>
}
