function Contact() {
  return (
    <div>
      <section style={{
        padding: 'clamp(50px, 12vw, 100px) 40px',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '36px',
          color: '#171717',
          margin: '0 0 40px'
        }}>
          Let's talk
        </h1>

        <div style={{ marginBottom: '48px' }}>
          <a href="mailto:meerabc955@gmail.com" style={contactLink}>
            meerabc955@gmail.com
          </a>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: '#171717',
            margin: '16px 0 0'
          }}>
            0308-6060653
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '28px',
          justifyContent: 'center'
        }}>
          <a href="https://www.linkedin.com/in/meerab-chaudhary-01028b2a6/" target="_blank" rel="noreferrer" style={secondaryLink}>
            LinkedIn
          </a>
          <a href="https://github.com/meerabc" target="_blank" rel="noreferrer" style={secondaryLink}>
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

const contactLink = {
  display: 'inline-block',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '24px',
  fontWeight: 600,
  color: '#0F766E',
  textDecoration: 'none'
}

const secondaryLink = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 600,
  color: '#171717',
  textDecoration: 'none',
  borderBottom: '1px solid #171717'
}

export default Contact