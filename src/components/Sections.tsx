import { useState } from 'react'
import portrait from '../assets/arif-portrait.png'
import moaiImage from '../assets/projects/moai.png'
import apparelImage from '../assets/projects/ls-apparel.png'
import suproImage from '../assets/activities/supro.jpeg'
import rugbyImage from '../assets/activities/rugby.jpeg'
import putrajaya21Image from '../assets/activities/putrajaya-21km.jpeg'
import putrajayaJomRunImage from '../assets/activities/putrajaya-jomrun.jpeg'
import kedah5kmImage from '../assets/activities/kedah-5km.jpeg'

const sectionStyle: React.CSSProperties = { padding: '7rem 3rem', maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }
const cardStyle: React.CSSProperties = { background: 'rgba(15,26,46,.72)', border: '1px solid var(--border)', borderRadius: 20, padding: '2rem', transition: 'border-color .3s, transform .3s', backdropFilter: 'blur(12px)' }

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub: string }) {
  return <div className="section-heading"><span className="section-tag">{tag}</span><h2 className="section-title">{title}</h2><p className="section-sub">{sub}</p></div>
}

export function SectionDivider({ id, number, title, description }: { id: string; number: string; title: string; description: string }) {
  return <div id={id} className="chapter-divider">
    <div className="chapter-track"><span>{number}</span><div><small>PORTFOLIO CHAPTER</small><h2>{title}</h2><p>{description}</p></div><b>{number} / 04</b></div>
    <div className="chapter-marquee" aria-hidden="true"><span>{title} · {title} · {title} · {title} · </span></div>
  </div>
}

export function Services() {
  return <section id="about" style={sectionStyle}>
    <div className="about-grid">
      <div className="about-photo-shell">
        <div className="about-orbit" /><span className="about-code">01 / ABOUT</span>
        <img src={portrait} alt="Muhammad Arif Azimi" className="about-photo" />
        <div className="about-photo-note"><i /> Based in Kedah, Malaysia</div>
      </div>
      <div className="about-copy">
        <span className="section-tag">A little about me</span>
        <h2 className="section-title">Curious by nature.<br /><em>Driven by solutions.</em></h2>
        <p>I’m <strong>Muhammad Arif Azimi bin Azhar</strong>, a Computer Science graduate from UiTM with practical experience across software development, web development, quality assurance, databases and data analytics.</p>
        <p>During my internship at Millennium Radius, I developed web and mobile components, connected interfaces to APIs and databases, built data visualisations, and helped improve software quality through structured testing and defect reporting.</p>
        <div className="about-facts"><div><span>Status</span><strong>Computer Science Graduate · Open to Opportunities</strong></div><div><span>Address</span><strong>Pokok Sena, Kedah, Malaysia</strong></div><div><span>Focus</span><strong>Software Engineering · QA · Data</strong></div><div><span>Interests</span><strong>Software Development · Data Analytics · Quality Assurance</strong></div><div><span>Languages</span><strong>Malay · English</strong></div></div>
        <div className="about-links"><a href="#contact" className="text-link">Let’s build something useful <b>↗</b></a><a href="https://www.linkedin.com/in/muhammad-arif-azimi" target="_blank" rel="noreferrer" className="linkedin-link">LinkedIn <b>↗</b></a></div>
      </div>
    </div>
  </section>
}

export function PortfolioGuide() {
  const sections = [
    { n: '01', title: 'About Me', desc: 'Introduction, personal story and contact information.', href: '#about', accent: 'Introduction' },
    { n: '02', title: 'Written Portfolio', desc: 'Professional summary, experience, education and project explanations.', href: '#journey', accent: 'Written content' },
    { n: '03', title: 'Visual Portfolio', desc: 'Website designs, project interfaces and activity photography.', href: '#visual', accent: 'Images & design' },
    { n: '04', title: 'Data Portfolio', desc: 'Analytics, data visualisation, API integration and coding projects.', href: '#projects', accent: 'Data & code' },
  ]
  return <section id="portfolio" className="portfolio-map"><div style={sectionStyle}>
    <div className="portfolio-map-head"><SectionHeader tag="Portfolio structure" title="Four sides of my journey" sub="Explore my background, written experience, visual work and data-focused projects." /><span className="map-mark">04<br/><small>SECTIONS</small></span></div>
    <div className="portfolio-map-grid">{sections.map(s => <div key={s.n} className="portfolio-map-card"><span>{s.n}</span><small>{s.accent}</small><h3>{s.title}</h3><p>{s.desc}</p><b>Presented in order ↓</b></div>)}</div>
  </div></section>
}

export function Skills() {
  const groups = [
    { n: '01', name: 'Development', items: ['Java', 'C++', 'Spring Boot', 'Jmix', 'React Native', 'Expo', 'Astro', 'HTML & CSS', 'REST APIs'] },
    { n: '02', name: 'Data & Tools', items: ['SQL', 'MySQL', 'MongoDB', 'Oracle', 'DBeaver', 'Power BI', 'Excel', 'Git'] },
    { n: '03', name: 'Quality Assurance', items: ['Manual Testing', 'Test Cases', 'System Testing', 'Defect Reporting', 'Jira', 'Database Validation'] },
  ]
  return <section id="skills" className="skills-band"><div style={sectionStyle}>
    <SectionHeader tag="My toolkit" title="Skills that move ideas forward" sub="A growing toolkit shaped through professional work, academic projects and continuous learning." />
    <div className="skill-groups">{groups.map(g => <article key={g.name} style={cardStyle} className="skill-card hover-card"><span className="skill-number">{g.n}</span><h3>{g.name}</h3><div className="skill-list">{g.items.map(s => <span key={s}>{s}</span>)}</div></article>)}</div>
  </div></section>
}

export function WrittenPortfolio() {
  const documents = [
    { n:'01', type:'Project Documentation', title:'Interactive Weather Analytics', text:'A technical project write-up covering REST API integration, JSON processing, location filtering, dashboard logic and chart-based presentation of weather data.', points:['Problem and objective','Implementation approach','Data processing','Testing and outcome'] },
    { n:'02', type:'Internship Summary', title:'Software Development & QA Internship', text:'A professional summary of my work at Millennium Radius, including web and mobile development, database validation, staging tests and defect reporting.', points:['Tasks completed','Tools and technologies','QA responsibilities','Skills developed'] },
    { n:'03', type:'QA Documentation', title:'Test Cases & Defect Reports', text:'Structured testing documentation used to record test scenarios, expected results, system behaviour and reproducible defect evidence for project teams.', points:['Test scenarios','Expected results','Evidence and logs','Jira reporting'] },
    { n:'04', type:'Project Explanation', title:'Personalized Red Book Log System', text:'A concise explanation of my final-year project, its purpose, system approach and the software-engineering decisions made during development.', points:['Project background','System requirements','Design decisions','Final outcome'] },
  ]
  return <section id="written-content" style={sectionStyle}><SectionHeader tag="Written evidence" title="Documentation & project writing" sub="Clear written explanations that show how I understand, document and communicate technical work."/><div className="written-grid">{documents.map(d=><article key={d.n} className="written-card"><div className="written-top"><span>{d.n}</span><small>{d.type}</small></div><h3>{d.title}</h3><p>{d.text}</p><ul>{d.points.map(p=><li key={p}>{p}</li>)}</ul></article>)}</div></section>
}

export function VisualProjects() {
  const visuals = [
    { image:moaiImage, label:'Website UI', title:'MOAI Website', text:'Responsive AI knowledge-platform website with structured content, strong visual hierarchy and interactive sections.', tools:'Astro · HTML · CSS · JavaScript' },
    { image:apparelImage, label:'Brand Website', title:'LS Apparel', text:'Editorial product website featuring custom jerseys, portfolio imagery and an immersive visual identity.', tools:'HTML · CSS · JavaScript', url:'https://matarep.github.io/LSA-Apparel/' },
  ]
  return <section id="visual-projects" style={sectionStyle}><SectionHeader tag="Digital visuals" title="Interfaces & website design" sub="Screenshots and visual evidence of websites and interfaces I have helped create."/><div className="visual-grid">{visuals.map(v=><article className={`visual-card ${v.url ? 'lsa-visual-card' : ''}`} key={v.title}><div className="visual-image"><img src={v.image} alt={`${v.title} screenshot`}/><span>{v.label}</span></div><div><h3>{v.title}</h3><p>{v.text}</p><small>{v.tools}</small>{v.url && <a className="live-site-btn" href={v.url} target="_blank" rel="noreferrer">View Live Website <b>↗</b></a>}</div></article>)}</div></section>
}

export function DataCodingPortfolio() {
  const code = [
    "const sections = ['product', 'features', 'about'];",
    '',
    'function switchFeature(id) {',
    '  const panel = document.getElementById(id);',
    "  panel?.classList.add('is-active');",
    '}',
    '',
    'const observer = new IntersectionObserver(entries => {',
    '  entries.forEach(entry => {',
    "    entry.target.classList.toggle('visible', entry.isIntersecting);",
    '  });',
    '});',
  ]
  return <section id="coding-evidence" style={sectionStyle}>
    <SectionHeader tag="Code & process" title="MOAI development evidence" sub="A code-oriented view of how interactive website sections and scroll behaviour were implemented for the MOAI experience."/>
    <div className="code-evidence"><div className="code-window"><div className="code-toolbar"><i/><i/><i/><span>moai-interactions.js</span></div><div className="code-body"><div className="code-tree"><b>EXPLORER</b><span>▾ moai</span><span>&nbsp;&nbsp;▾ src</span><strong>&nbsp;&nbsp;&nbsp;&nbsp;◆ index.html</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;# styles.css</strong><strong>&nbsp;&nbsp;&nbsp;&nbsp;JS script.js</strong></div><pre>{code.map((line,i)=><div key={i}><em>{String(i+1).padStart(2,'0')}</em><code>{line || ' '}</code></div>)}</pre></div></div><div className="code-notes"><span className="project-type">Coding project · MOAI</span><h3>From static layout to interactive experience</h3><p>The MOAI work combines semantic page structure, responsive styling and JavaScript interactions. This evidence demonstrates practical front-end coding rather than only the finished screenshot.</p><div className="data-proof"><div><b>HTML</b><span>Semantic sections</span></div><div><b>CSS</b><span>Responsive interface</span></div><div><b>JavaScript</b><span>Interaction logic</span></div><div><b>Testing</b><span>Cross-screen checks</span></div></div></div></div>
  </section>
}

function AzurePreview() {
  return <div className="ui-preview azure-ui"><div className="ui-top"><b>BGD</b><span>Summary</span><span>Reports</span><strong>List</strong><span>Development</span></div><div className="ui-body"><div><small>BGD-249 / BGD-253</small><h4>[BGD][16A][1600] Opt in marketing consent</h4><p>Description</p><div className="ui-line" /><p>Subtasks</p><div className="work-item">BGD-254 &nbsp; TC01 — Investor gives Marketing Consent <b>OPEN</b></div></div><aside><b>Details</b><span>Reporter</span><strong>Muhammad Arif Azimi</strong><span>Status</span><strong>To Do</strong></aside></div></div>
}

function WeatherPreview() {
  return <div className="ui-preview weather-ui"><div className="weather-nav"><b>Cuaca3 App</b><span>☰ &nbsp; Weather Dashboard</span></div><div className="weather-body"><h4>Interactive Weather Analytics</h4><div className="weather-filter">Filter by Location: <b>Hilir Perak⌄</b></div><div className="weather-panels"><div><strong>Rain status (area)</strong><div className="bar-chart"><i/><i/><i/><i/></div></div><div><strong>Rain vs no rain</strong><div className="donut" /></div><aside><small>This week's maximum temperature</small><b>35°C</b></aside></div></div></div>
}

export function Projects() {
  const projects = [
    { number: '01', label: 'Quality Assurance', title: 'BGD Test Management', desc: 'Created and managed structured test cases for features such as marketing consent. Used Azure DevOps to organise work items, document expected behaviour and support traceable QA execution.', tags: ['Azure DevOps', 'Test Cases', 'QA', 'Defect Tracking'], visual: <AzurePreview /> },
    { number: '02', label: 'Web Development', title: 'MoAI — AI Knowledge Platform', desc: 'Contributed to a polished technology-focused website communicating an AI knowledge platform through clear visual hierarchy, responsive sections and strong calls to action.', tags: ['Astro', 'HTML', 'CSS', 'Responsive UI'], visual: <img src={moaiImage} alt="MoAI AI knowledge platform website" /> },
    { number: '03', label: 'Data & API', title: 'Interactive Weather Analytics', desc: 'Built an analytics dashboard that consumes REST API weather data, processes JSON, filters information by location, and presents rain and temperature patterns through dynamic charts.', tags: ['Java', 'Jmix', 'REST API', 'JSON', 'Charts'], visual: <WeatherPreview /> },
    { number: '04', label: 'Front-end Development', title: 'LS Apparel Website', desc: 'Created a high-impact custom apparel portfolio with bold editorial layouts, product showcases, sizing information and responsive visual storytelling.', tags: ['HTML', 'CSS', 'JavaScript', 'Brand UI'], visual: <img className="contain-project-image" src={apparelImage} alt="LS Apparel custom jersey website" />, url: 'https://matarep.github.io/LSA-Apparel/' },
  ]
  return <section id="projects" style={sectionStyle}>
    <SectionHeader tag="Selected work" title="Projects with purpose" sub="A closer look at products and systems I have helped build, test and shape." />
    <div className="projects-stack">{projects.map((p, i) => <article className={`project-row ${i % 2 ? 'reverse' : ''}`} key={p.title}>
      <div className="project-media"><div className="browser-bar"><i/><i/><i/><span>project / {p.number}</span></div>{p.visual}<div className="media-shine" /></div>
      <div className="project-detail"><span className="project-count">{p.number}</span><span className="project-type">{p.label}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="skill-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.url && <a className="live-site-btn" href={p.url} target="_blank" rel="noreferrer">View Live Website <b>↗</b></a>}</div>
    </article>)}</div>
  </section>
}

export function Activities() {
  const activities = [
    { image: suproImage, category: 'University · Team Sport', title: 'SUPRO — Sukan Antara Program', desc: 'Represented my university programme in Sukan Antara Program. The experience strengthened teamwork, communication and the spirit of competing together as one programme.', meta: 'Programme representation' },
    { image: rugbyImage, category: 'University · Rugby', title: 'Sukan Antara Fakulti', desc: 'Represented my faculty in an inter-faculty rugby competition. Competing against other faculties developed discipline, resilience and trust within the team.', meta: 'Faculty representation' },
    { image: putrajaya21Image, category: 'Endurance · Putrajaya', title: 'Ultron Putrajaya Night Run 21.1KM', desc: 'Completed the 21.1 km half-marathon distance at the Ultron Putrajaya Night Run—a personal endurance milestone built through commitment and mental strength.', meta: '21.1 km finisher' },
    { image: putrajayaJomRunImage, category: 'Running · Putrajaya', title: 'JomRun Putrajaya', desc: 'Took part in a Putrajaya road run in the recognisable orange JomRun jersey. Another meaningful step in maintaining an active and consistent lifestyle.', meta: 'Putrajaya run' },
    { image: kedah5kmImage, category: 'Running · Kedah', title: '5KM Kedah Run', desc: 'Completed a 5 km running event in Kedah. Taking part in local running events keeps me motivated, disciplined and connected to the community.', meta: '5 km participant' },
  ]
  const [active, setActive] = useState(0)
  const current = activities[active]
  const move = (direction: number) => setActive((active + direction + activities.length) % activities.length)
  return <section id="visual-content" style={sectionStyle}>
    <SectionHeader tag="Beyond the screen" title="Sport, endurance & teamwork" sub="A visual portfolio of the experiences that shape how I work: commitment, teamwork and the determination to finish what I start." />
    <div className="activity-showcase">
      <div className="activity-photo"><img key={current.image} src={current.image} alt={current.title}/><span className="activity-position">{String(active + 1).padStart(2,'0')} / {String(activities.length).padStart(2,'0')}</span></div>
      <div className="activity-content"><span className="project-type">{current.category}</span><h3>{current.title}</h3><p>{current.desc}</p><div className="activity-meta"><i/> {current.meta}</div><div className="activity-controls"><button onClick={() => move(-1)} aria-label="Previous activity">‹</button><button onClick={() => move(1)} aria-label="Next activity">›</button></div></div>
    </div>
    <div className="activity-thumbs">{activities.map((item,index)=><button key={item.title} className={index === active ? 'active' : ''} onClick={()=>setActive(index)} aria-label={`Show ${item.title}`}><img src={item.image} alt=""/><span>{String(index+1).padStart(2,'0')}</span></button>)}</div>
  </section>
}

export function Experience() {
  const entries = [
    ['Mar 2026 — Jul 2026','Software Development & QA Intern','Millennium Radius Sdn Bhd · Shah Alam','Developed web and mobile components, integrated APIs and databases, executed test cases, documented defects in Jira and collaborated with developers to verify fixes.','Experience'],
    ['Mar 2023 — Present','BSc (Hons) Computer Science','Universiti Teknologi MARA · Shah Alam','Final-year project: Personalized Red Book Log System. CGPA 3.40.','Education'],
    ['Oct 2020 — Feb 2023','Diploma in Science','Universiti Teknologi MARA · Tapah','Built a broad analytical foundation across science disciplines. CGPA 3.59.','Education'],
    ['2024 — 2026','Leadership & Activities','GPMS Club · SULAM Programme','Organised sports activities and supported the coordination of an international webinar.','Leadership'],
  ]
  return <section id="journey" className="journey-band"><div style={sectionStyle}><SectionHeader tag="My journey" title="Experience & education" sub="Learning by building, testing and working with others." /><div className="timeline">{entries.map((e,i)=><article key={e[1]}><div className="timeline-dot">0{i+1}</div><div><span className="project-type">{e[0]}</span><h3>{e[1]}</h3><p className="org">{e[2]}</p><p>{e[3]}</p></div><span className="timeline-mark">{e[4]}</span></article>)}</div></div></section>
}

export function Contact() {
  return <section id="contact" style={sectionStyle}><div className="contact-card contact-card-new"><div className="contact-glow"/><div className="contact-wordmark">MUHAMMAD ARIF AZIMI</div><div className="contact-layout"><div><span className="section-tag">Get in touch</span><h2 className="section-title">CONTACT US</h2><p className="contact-kicker">For opportunities and enquiries</p></div><div className="contact-details"><div><span>NAME</span><strong>Muhammad Arif Azimi bin Azhar</strong></div><a href="tel:+60143930169"><span>PHONE</span><strong>014-393 0169</strong></a><a href="mailto:arifazimiazhar@gmail.com"><span>EMAIL</span><strong>arifazimiazhar@gmail.com</strong></a><a href="https://www.linkedin.com/in/muhammad-arif-azimi" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>linkedin.com/in/muhammad-arif-azimi</strong></a></div></div></div></section>
}
