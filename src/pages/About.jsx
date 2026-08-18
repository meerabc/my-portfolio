import { Link } from 'react-router-dom'
import aboutPhoto from '../assets/images/about-photo.png'

function About() {
  return (
    <div>
      {/* Bio + photo */}
      <section style={{
        padding: 'clamp(40px, 10vw, 80px) 40px clamp(30px, 8vw, 60px)',
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        gap: '48px',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <img src={aboutPhoto} alt="Meerab Chaudhary" style={{
          width: '220px',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '12px',
          border: '1px solid #e5e5e5'
        }} />
        <div style={{ flex: 1, minWidth: '280px',  textAlign: 'left' }}>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '32px',
            color: '#171717',
            margin: '0 0 16px'
          }}>
            About
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            lineHeight: 1.7,
            color: '#171717',
            margin: 0
          }}>
            React developer focused on getting UI exactly right, pixel by pixel, responsive by default. Trained on real work at SharkStack, first as an intern, then as a Junior Frontend Developer, building and shipping actual product features, not just practice projects. I care about matching a design exactly, not close enough, and about interfaces that hold up once someone actually clicks through them, not just look right in a screenshot.
          </p>
        </div>
      </section>

      {/* Background */}
      <section style={{
        padding: 'clamp(20px, 5vw, 40px) 40px clamp(30px, 8vw, 60px)',
        maxWidth: '900px',
        margin: '0 auto',
        borderTop: '1px solid #e5e5e5'
      }}>
        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '22px',
          color: '#171717',
          margin: 'clamp(16px, 4vw, 32px) 0 20px'
        }}>
          Background
        </h2>

        <div style={{ marginBottom: '20px' }}>
          <p style={roleTitle}>Junior Frontend Developer, SharkStack</p>
          <p style={roleDate}>Dec 2025 to Mar 2026</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p style={roleTitle}>Frontend Developer Intern, SharkStack</p>
          <p style={roleDate}>Jun 2025 to Sep 2025</p>
        </div>

        <div>
          <p style={roleTitle}>BSCS, National University of Sciences and Technology (NUST)</p>
          <p style={roleDate}>2023 to 2027</p>
        </div>
      </section>

      {/* CTA */}
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

const roleTitle = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  fontSize: '16px',
  color: '#171717',
  margin: '0 0 4px'
}

const roleDate = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  color: '#171717',
  opacity: 0.6,
  margin: 0
}

export default About