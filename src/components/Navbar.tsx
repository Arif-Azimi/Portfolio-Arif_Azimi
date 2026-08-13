import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about-chapter')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['about-chapter', 'written', 'visual', 'data', 'contact']
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * .32
      let current = ids[0]
      ids.forEach(id => {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) current = id
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about-chapter', label: '01 About Me' },
    { href: '#written', label: '02 Written' },
    { href: '#visual', label: '03 Visual' },
    { href: '#data', label: '04 Data' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '0.9rem 3rem' : '1.2rem 3rem',
        background: 'rgba(5,10,20,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        transition: 'padding 0.3s ease',
      }}
    >
      {/* Logo */}
      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', color: 'var(--accent)', letterSpacing: 3, fontWeight: 800 }}>
        ARIF AZIMI.
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem' }} className="hidden md:flex">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className={activeSection === l.href.slice(1) ? 'nav-link active' : 'nav-link'}
            style={{ fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{ display: 'block', width: 24, height: 2, background: 'var(--text)', borderRadius: 2 }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(5,10,20,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem', zIndex: 99,
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--text)', fontSize: '1.3rem', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
