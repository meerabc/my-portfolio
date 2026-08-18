import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px clamp(20px, 5vw, 40px)',
        borderBottom: '1px solid #e5e5e5',
        position: 'relative'
      }}>
        <NavLink to="/" onClick={() => setMenuOpen(false)} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: '#171717',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600
        }}>
          <span style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#0F766E',
            color: '#FAFAFA',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            flexShrink: 0
          }}>MC</span>
          Meerab Chaudhary
        </NavLink>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)} style={navLinkStyle}>Home</NavLink>
          <NavLink to="/work" onClick={() => setMenuOpen(false)} style={navLinkStyle}>Work</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} style={navLinkStyle}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} style={navLinkStyle}>Contact</NavLink>
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        >
          <span style={{ fontSize: '24px', color: '#171717' }}>{menuOpen ? '\u2715' : '\u2630'}</span>
        </button>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '24px clamp(20px, 5vw, 40px)',
        borderTop: '1px solid #e5e5e5',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        color: '#171717'
      }}>
        Meerab Chaudhary
      </footer>
    </div>
  )
}

const navLinkStyle = ({ isActive }) => ({
  textDecoration: 'none',
  color: isActive ? '#0F766E' : '#171717',
  fontFamily: 'Inter, sans-serif',
  fontWeight: isActive ? 600 : 400,
  fontSize: '15px'
})

export default Layout