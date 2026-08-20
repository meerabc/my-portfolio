import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'

// Reach Shop
import reachShopHero from '../assets/images/reach-shop-hero.png'
import reachShopBrowsing from '../assets/images/reach-shop-browsing.png'
import reachShopDetail from '../assets/images/reach-shop-product-detail.png'
import reachShopSignin from '../assets/images/reach-shop-signin-redirect.png'

// REST Countries
import restCountriesGrid from '../assets/images/rest-countries-home-grid.png'
import restCountriesDetail from '../assets/images/rest-countries-detail.png'

// Wonders of the World
import wondersGrid from '../assets/images/wonders-card-grid.png'

// Resume Clone (Comparison)
import resumeOrigDesktop from '../assets/images/resume-clone-original-desktop-hero.png'
import resumeOrigMobile from '../assets/images/resume-clone-original-mobile-hero.png'
import resumeOrigGrid from '../assets/images/resume-clone-original-portfolio-grid.png'
import resumeDesktop from '../assets/images/resume-clone-desktop-hero.png'
import resumeMobile from '../assets/images/resume-clone-mobile-hero.png'
import resumeGrid from '../assets/images/resume-clone-portfolio-grid.png'

// SharkStack CRM (New 4 images)
import crmNewProjectDesktop from '../assets/images/crm-new-project-desktop.png'
import crmNewProjectMobile from '../assets/images/crm-new-project-mobile.png'
import crmNewUserDesktop from '../assets/images/crm-new-user-desktop.png'
import crmNewUserMobile from '../assets/images/crm-new-user-mobile.png'

function ProjectCase({ title, problem, whatIDid, outcome, nextTime, images, liveUrl, repoUrl, imageLayout = 'default' }) {
  return (
    <ScrollReveal as="section" style={{
      padding: 'clamp(30px, 8vw, 60px) 40px',
      maxWidth: '900px',
      margin: '0 auto',
      borderTop: '1px solid #e5e5e5'
    }}>
      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '30px',
        color: '#171717',
        margin: '0 0 20px'
      }}>
        {title}
      </h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>The problem</p>
        <p style={caseText}>{problem}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>What I did</p>
        <p style={caseText}>{whatIDid}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>What came of it</p>
        <p style={caseText}>{outcome}</p>
      </div>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '15px',
        fontStyle: 'italic',
        color: '#171717',
        opacity: 0.7,
        margin: '0 0 28px'
      }}>
        Next time: {nextTime}
      </p>

      {imageLayout === 'stackedLeft' ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div className="bracket-frame" style={{ gridColumn: '1', gridRow: '1', borderRadius: '6px' }}>
            <img src={images[0]} alt={`${title} screenshot 1`} className="case-img" style={{
              width: '100%', display: 'block', borderRadius: '6px', border: '1px solid #e5e5e5'
            }} />
          </div>
          <div className="bracket-frame" style={{ gridColumn: '1', gridRow: '2', borderRadius: '6px' }}>
            <img src={images[2]} alt={`${title} screenshot 3`} className="case-img" style={{
              width: '100%', display: 'block', borderRadius: '6px', border: '1px solid #e5e5e5'
            }} />
          </div>
          <div className="bracket-frame" style={{ gridColumn: '2', gridRow: '1 / 3', borderRadius: '6px', height: '100%' }}>
            <img src={images[1]} alt={`${title} screenshot 2`} className="case-img" style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '6px', border: '1px solid #e5e5e5'
            }} />
          </div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {images.map((img, i) => (
            <div key={i} className="bracket-frame" style={{ borderRadius: '6px' }}>
              <img src={img} alt={`${title} screenshot ${i + 1}`} className="case-img" style={{
                width: '100%',
                display: 'block',
                borderRadius: '6px',
                border: '1px solid #e5e5e5'
              }} />
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href={liveUrl} target="_blank" rel="noreferrer" className="underline-link" style={linkStyle}>Live demo &rarr;</a>
        <a href={repoUrl} target="_blank" rel="noreferrer" className="underline-link" style={linkStyle}>GitHub repo &rarr;</a>
      </div>
    </ScrollReveal>
  )
}

function ResumeComparisonCase({ title, problem, whatIDid, outcome, nextTime, liveUrl, repoUrl, originalUrl }) {
  const compImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '6px',
    border: '1px solid #171717'
  };

  const compLabelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    color: '#171717',
    textAlign: 'center',
    margin: '12px 0 0',
    fontWeight: 600
  };

  return (
    <ScrollReveal as="section" style={{
      padding: 'clamp(30px, 8vw, 60px) 40px',
      maxWidth: '900px',
      margin: '0 auto',
      borderTop: '1px solid #e5e5e5'
    }}>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '30px', color: '#171717', margin: '0 0 20px' }}>
        {title}
      </h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>The problem</p>
        <p style={caseText}>{problem}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>What I did</p>
        <p style={caseText}>{whatIDid}</p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseLabel}>What came of it</p>
        <p style={caseText}>{outcome}</p>
      </div>

      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontStyle: 'italic', color: '#171717', opacity: 0.7, margin: '0 0 28px' }}>
        Next time: {nextTime}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '32px' }}>
        {/* Desktop Pair */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeOrigDesktop} alt="Original Desktop Template" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>W3Schools Template (original)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeDesktop} alt="My Desktop Clone" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>My Build (cloned)</p>
          </div>
        </div>
        
        {/* Mobile Pair */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeOrigMobile} alt="Original Mobile Template" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>W3Schools Template (original)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeMobile} alt="My Mobile Clone" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>My Build (cloned)</p>
          </div>
        </div>

        {/* Grid Pair */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeOrigGrid} alt="Original Grid Template" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>W3Schools Template (original)</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="bracket-frame" style={{ flexGrow: 1, display: 'flex', borderRadius: '6px' }}>
              <img src={resumeGrid} alt="My Grid Clone" className="case-img" style={compImgStyle} />
            </div>
            <p style={compLabelStyle}>My Build (cloned)</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a href={liveUrl} target="_blank" rel="noreferrer" className="underline-link" style={linkStyle}>Live demo &rarr;</a>
        <a href={repoUrl} target="_blank" rel="noreferrer" className="underline-link" style={linkStyle}>GitHub repo &rarr;</a>
        <a href={originalUrl} target="_blank" rel="noreferrer" className="underline-link" style={linkStyle}>Original Template &rarr;</a>
      </div>
    </ScrollReveal>
  )
}

function CrmProjectCase() {
  const crmImgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '6px',
    border: '1px solid #171717'
  };

  return (
    <ScrollReveal as="section" style={{
      padding: 'clamp(30px, 8vw, 60px) 40px',
      maxWidth: '900px',
      margin: '0 auto',
      borderTop: '1px solid #e5e5e5'
    }}>
      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '30px', color: '#171717', margin: '0 0 20px' }}>
        SharkStack Internal CRM
      </h2>

      <div style={{ marginBottom: '24px' }}>
        <p style={caseText}>I worked on a real CRM project at SharkStack, fixing responsiveness issues on an interface originally generated with Loveable for an internal tool. Because this is an internal project, the live link and repository are strictly confidential.</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div className="bracket-frame" style={{ display: 'flex', borderRadius: '6px' }}>
          <img src={crmNewProjectDesktop} alt="CRM New Project Desktop" className="case-img" style={crmImgStyle} />
        </div>
        <div className="bracket-frame" style={{ display: 'flex', borderRadius: '6px' }}>
          <img src={crmNewUserDesktop} alt="CRM New User Desktop" className="case-img" style={crmImgStyle} />
        </div>
        <div className="bracket-frame" style={{ display: 'flex', borderRadius: '6px' }}>
          <img src={crmNewProjectMobile} alt="CRM New Project Mobile" className="case-img" style={crmImgStyle} />
        </div>
        <div className="bracket-frame" style={{ display: 'flex', borderRadius: '6px' }}>
          <img src={crmNewUserMobile} alt="CRM New User Mobile" className="case-img" style={crmImgStyle} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <span style={{ ...caseLabel, margin: 0, opacity: 0.7 }}>Internal / Confidential (No Public Links)</span>
      </div>
    </ScrollReveal>
  )
}

const caseLabel = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: '#0F766E',
  margin: '0 0 6px'
}

const caseText = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '16px',
  lineHeight: 1.7,
  color: '#171717',
  margin: 0
}

const linkStyle = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  fontSize: '15px',
  color: '#0F766E',
  textDecoration: 'none'
}

function Work() {
  return (
    <div>
      <section style={{ position: 'relative', padding: 'clamp(40px, 10vw, 80px) 40px clamp(10px, 3vw, 20px)', maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>
        <div className="blueprint-bg" aria-hidden="true" />
        <h1 className="reveal is-visible" style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '36px',
          color: '#171717',
          margin: 0,
          position: 'relative',
          animation: 'fadeRiseIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both'
        }}>
          Work
        </h1>
      </section>

      <ProjectCase
        title="Reach Shop"
        problem="I wanted practice building a full e-commerce style app with real state management, not just a UI shell. Reach Shop was a clone project covering the whole flow: browsing products, filtering, cart, and auth, not just one isolated feature."
        whatIDid="I built the cart with Redux Toolkit, storing items in a cart.js slice, and used separate localStorage keys per user (carts_user_id vs carts_guest) so each account's cart stays isolated. You can add to cart as a guest, but the cart page itself is a protected route, so viewing it without logging in redirects you to sign in. Auth was handled with context and public/private routes. Styling and animations were done in plain CSS, and the app has light/dark mode, product search and filtering, and a login-gated cart view."
        outcome="It worked. Cart items correctly persisted per user, and I came out of it actually understanding Redux, since this was my first time using it and I had to learn it through tutorials while building. It's live on Vercel with the code on GitHub."
        nextTime="add guest-to-user cart merging on login, a user profile page, a payment page, and an add-to-cart animation."
        images={[reachShopHero, reachShopBrowsing, reachShopDetail, reachShopSignin]}
        liveUrl="https://react-shop-two-sage.vercel.app/"
        repoUrl="https://github.com/meerabc/react-shop.git"
      />

      <ProjectCase
        title="REST Countries Explorer"
        problem="I built this during my internship to learn API integration and theme switching. The app needed search, region filtering, dark/light mode, and a details page for each country, but it also needed to actually hold together as you moved between pages, not just work in isolation."
        whatIDid="I found two real problems early on. First, going from the home page to a country's detail page and back reset all my filters, so I built a country context to hold the currently filtered list across navigation. Second, I wanted to fetch full country data once and store it in a single array to avoid repeated calls, but the API's attribute limit on the list endpoint meant I couldn't get everything I needed for the details page that way. I decided to make a second API call per country, on click, instead of over-fetching everything upfront."
        outcome="The filters correctly persisted after adding context. The trade-off was a load delay on the details page, since it fetched data live instead of pulling from memory. Given the project's requirements, that was the right call."
        nextTime="cache country details once fetched, so revisiting the same country doesn't hit the API again."
        images={[restCountriesGrid, restCountriesDetail]}
        liveUrl="https://rest-countries-api-gray-phi.vercel.app/"
        repoUrl="https://github.com/meerabc/Rest-Countries-API.git"
      />

      <ProjectCase
        title="Wonders of the World"
        problem="Early in my internship, my mentor asked me to practice dynamic data handling in React, specifically components and props, in whatever way I chose. I decided to build a card-based site listing world wonders."
        whatIDid="I built a single reusable card component and stored each wonder's data (name, location, image, description, Google Maps link, Wikipedia link) in one data.js file as an array of objects with a consistent structure. I rendered the cards using .map(), so the card component just takes in whatever wonder data it's given and displays it, no per-wonder custom code."
        outcome="I understood how props and .map() work together for data-driven UI, and how to structure a small project around one consistent data shape. I used a static file instead of an API since the data set was small and fixed."
        nextTime="if this were a larger project with a lot more data, I'd pull from a real API instead."
        images={[wondersGrid]}
        liveUrl="https://data-drive-cards-react.vercel.app/"
        repoUrl="https://github.com/meerabc/Data-drive-cards-react.git"
      />

      <ResumeComparisonCase
        title="Resume Clone"
        problem="This was one of my earliest internship projects, meant to build responsiveness and pixel-perfect design skills using plain HTML and CSS. The goal was to match an existing resume design as closely as possible, an exact clone, not just something similar."
        whatIDid="I built the whole thing myself with HTML and CSS, no AI involved. The hardest part was getting the responsiveness and spacing pixel-perfect, which took a lot of trial and error to match the original design exactly."
        outcome="It ended up looking like a genuine clone of the original design, and my mentor approved it."
        nextTime="add a subtle animation for how the layout transitions when it responds to different screen sizes."
        liveUrl="https://resume-clone-liard.vercel.app/#portfolio"
        repoUrl="https://github.com/meerabc/Resume---Clone.git"
        originalUrl="https://www.w3schools.com/howto/tryw3css_templates_bw_portfolio.htm"
      />

      <CrmProjectCase />

      <ScrollReveal as="section" style={{
        padding: 'clamp(30px, 8vw, 60px) 40px',
        textAlign: 'center',
        backgroundColor: '#0F766E',
        marginTop: '40px'
      }}>
        <p style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '22px',
          color: '#FAFAFA',
          margin: '0 0 20px'
        }}>
          Like what you see?
        </p>
        <Link to="/contact" className="lift-btn" style={{
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
      </ScrollReveal>
    </div>
  )
}

export default Work