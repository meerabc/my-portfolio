import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/meajpqyp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  // Clear success/error message when user starts typing again
  const handleInputChange = () => {
    if (status === 'success' || status === 'error') {
      setStatus('idle')
    }
  }

  return (
    <div>
      <section style={{
        padding: 'clamp(50px, 12vw, 100px) 40px',
        maxWidth: '600px',
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
          justifyContent: 'center',
          marginBottom: '56px'
        }}>
          <a href="https://linkedin.com/in/meerab-chaudhary" target="_blank" rel="noreferrer" style={secondaryLink}>
            LinkedIn
          </a>
          <a href="https://github.com/meerabc" target="_blank" rel="noreferrer" style={secondaryLink}>
            GitHub
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '48px', textAlign: 'left' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#171717',
            opacity: 0.7,
            margin: '0 0 24px',
            textAlign: 'center'
          }}>
            Or send a message directly
          </p>

          <form onSubmit={handleSubmit} onChange={handleInputChange}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#0F766E',
                color: '#FAFAFA',
                border: 'none',
                borderRadius: '4px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                cursor: status === 'sending' ? 'default' : 'pointer',
                opacity: status === 'sending' ? 0.7 : 1
              }}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#0F766E', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginTop: '16px', textAlign: 'center' }}>
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#B91C1C', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginTop: '16px', textAlign: 'center' }}>
                Something went wrong, please email me directly instead.
              </p>
            )}
          </form>
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

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginBottom: '16px',
  border: '1px solid #e5e5e5',
  borderRadius: '4px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  color: '#171717',
  boxSizing: 'border-box'
}

export default Contact