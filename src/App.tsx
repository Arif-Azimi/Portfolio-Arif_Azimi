import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services, PortfolioGuide, SectionDivider, WrittenPortfolio, VisualProjects, DataCodingPortfolio, Skills, Projects, Activities, Experience, Contact } from './components/Sections'

export default function App() {
  return <div style={{ background: 'var(--bg)', minHeight: '100vh', position: 'relative' }}>
    <div className="ambient-orb ambient-orb-one" />
    <div className="ambient-orb ambient-orb-two" />
    <Navbar />
    <Hero />
    <PortfolioGuide />
    <SectionDivider id="about-chapter" number="01" title="About Me" description="Introduction, personal story and the background behind my work." />
    <Services />
    <SectionDivider id="written" number="02" title="Written Portfolio" description="My professional summary, education, experience and leadership journey." />
    <WrittenPortfolio />
    <Experience />
    <SectionDivider id="visual" number="03" title="Visual Portfolio" description="Photography and visual evidence of teamwork, sport and personal milestones." />
    <VisualProjects />
    <Activities />
    <SectionDivider id="data" number="04" title="Data Portfolio" description="Technical skills, data visualisation, interfaces and coding projects." />
    <Skills />
    <DataCodingPortfolio />
    <Projects />
    <Contact />
    <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted)', fontSize: '.8rem', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>© 2026 Muhammad Arif Azimi bin Azhar — Built with purpose.</footer>
    <style>{`
      .hover-card:hover { border-color: var(--accent) !important; transform: translateY(-4px); }
      .hover-card-purple:hover { border-color: var(--accent2) !important; transform: translateY(-4px); }
      .btn-outline-sm { display:inline-block;padding:.65rem 1.4rem;border-radius:50px;background:transparent;color:var(--text);font-weight:500;font-size:.85rem;border:1px solid var(--border);text-decoration:none;transition:.2s }
      .btn-outline-sm:hover { border-color:var(--accent);color:var(--accent) }
      @media(max-width:768px){section{padding:4rem 1.5rem!important}}
    `}</style>
  </div>
}
