import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <NavLink to="/" style={{
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
            fontSize: '14px'
          }}>MC</span>
          Meerab Chaudhary
        </NavLink>

        <nav style={{ display: 'flex', gap: '28px' }}>
          <NavLink to="/" end style={navLinkStyle}>Home</NavLink>
          <NavLink to="/work" style={navLinkStyle}>Work</NavLink>
          <NavLink to="/about" style={navLinkStyle}>About</NavLink>
          <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '24px 40px',
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