import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: 'clamp(60px, 15vw, 120px) 40px clamp(40px, 8vw, 80px)',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(28px, 6vw, 44px)',
          color: '#171717',
          margin: '0 0 20px',
          lineHeight: 1.2
        }}>
          Design in, working interface out. Pixel-perfect, every time.
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          color: '#171717',
          opacity: 0.75,
          margin: 0
        }}>
          React developer turning designs into working interfaces, built through internship and junior developer experience at SharkStack.
        </p>
      </section>

      {/* Featured case preview (teaser only) */}
      <section style={{
        padding: 'clamp(30px, 8vw, 60px) 40px',
        maxWidth: '800px',
        margin: '0 auto',
        borderTop: '1px solid #e5e5e5'
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#0F766E',
          margin: '0 0 12px'
        }}>
          Featured case
        </p>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '26px',
          color: '#171717',
          margin: '0 0 12px'
        }}>
          Reach Shop
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: '#171717',
          opacity: 0.8,
          margin: '0 0 20px',
          lineHeight: 1.6
        }}>
          A full e-commerce style app with Redux cart state, per-user persistence, and protected routes. Browsing, filtering, cart, and auth, the whole flow, not just a UI shell.
        </p>
        <Link to="/work" style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: 600,
          color: '#0F766E',
          textDecoration: 'none'
        }}>
          See the full case &rarr;
        </Link>
      </section>

      {/* CTA band */}
      <section style={{
        padding: 'clamp(30px, 8vw, 60px) 40px',
        textAlign: 'center',
        backgroundColor: '#0F766E'
      }}>
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '22px',
          color: '#FAFAFA',
          margin: '0 0 20px'
        }}>
          Like what you see?
        </p>
        <Link to="/contact" style={{
          display: 'inline-block',
          padding: '12px 28px',
          backgroundColor: '#FAFAFA',
          color: '#0F766E',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '15px',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Email me and let's talk
        </Link>
      </section>
    </div>
  )
}

export default Home