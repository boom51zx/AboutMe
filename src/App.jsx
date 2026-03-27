import "./App.css";
import ParticleBackground from "./ParticleBackground";
import heroImage from "./image/Profile main.jpg";

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M19.54 5.34A16.4 16.4 0 0 0 15.5 4l-.2.4a15 15 0 0 1 3.63 1.46A12.9 12.9 0 0 0 12 4 12.9 12.9 0 0 0 5.07 5.86 15 15 0 0 1 8.7 4.4L8.5 4a16.4 16.4 0 0 0-4.04 1.34C1.9 9.14 1.2 12.82 1.55 16.45A16.6 16.6 0 0 0 6.5 19l1.2-1.64c-.68-.25-1.33-.58-1.95-.96.16.12.33.24.5.35A11.6 11.6 0 0 0 12 18.2a11.6 11.6 0 0 0 5.75-1.45c.17-.11.34-.23.5-.35-.62.38-1.27.71-1.95.96L17.5 19a16.6 16.6 0 0 0 4.95-2.55c.41-4.21-.7-7.86-2.91-11.11ZM9.85 14.4c-.96 0-1.75-.88-1.75-1.95s.77-1.95 1.75-1.95c1 0 1.78.89 1.75 1.95 0 1.07-.77 1.95-1.75 1.95Zm4.3 0c-.96 0-1.75-.88-1.75-1.95s.77-1.95 1.75-1.95c1 0 1.78.89 1.75 1.95 0 1.07-.76 1.95-1.75 1.95Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M13.5 22v-8.2h2.77l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14c-.3-.04-1.3-.14-2.48-.14-2.46 0-4.14 1.5-4.14 4.26v2.38H7.4v3.2h2.78V22h3.32Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.88 1.53 2.32 1.08 2.88.82.09-.66.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 .02-2.7 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.38.7.14 1.6.07 1.76.63.68 1 1.56 1 2.64 0 3.85-2.34 4.69-4.58 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function App() {
  return (
    <>
      <ParticleBackground />

      <div className="page-frame">
        <header className="navbar">
          <div className="logo">Ammarin</div>
          <nav className="nav-links">
            <a href="#home">Launch</a>
            <a href="#about">Mission</a>
            <a href="#contact">Signals</a>
          </nav>
        </header>

        <main className="content">
          <section id="home" className="section hero-section">
            <div className="hero-grid">
              <div className="card hero-card">
                <span className="eyebrow">Deep Space Portfolio</span>
                <h1>Ammarin</h1>
                <p className="subtitle">
                  React Explorer | Cybersecurity Enthusiast | Building in Orbit
                </p>
                <p className="about">
                  I am a beginner in cybersecurity with a strong willingness to
                  learn and improve. I am currently building my skills through
                  hands-on practice, CTF challenges, and continuous self-study,
                  with the goal of growing into a professional in the future.
                </p>

                <div className="hero-highlights">
                  <div className="highlight-pill">
                    <span className="highlight-title">Current Orbit</span>
                    <strong>Frontend + Motion UI</strong>
                  </div>
                  <div className="highlight-pill">
                    <span className="highlight-title">Focus</span>
                    <strong>Creative Portfolio Experience</strong>
                  </div>
                </div>

                <div className="hero-actions">
                  <a href="#about" className="primary-link">
                    Explore Mission
                  </a>
                  <a href="#contact" className="secondary-link">
                    Open Signal
                  </a>
                </div>
              </div>

              <aside className="status-panel">
                <div className="image-card">
                  <div className="image-badge">Profile</div>
                  <img
                    src={heroImage}
                    alt="Ammarin profile"
                    className="hero-image"
                  />
                  <div className="image-caption">
                    <strong>Ammarin Profile</strong>
                    <span>Main profile image for the hero section of this portfolio.</span>
                  </div>
                </div>

                <div className="status-grid">
                  <div className="status-card compact-card">
                    <span className="status-label">Current Orbit</span>
                    <strong>Frontend + Motion UI</strong>
                    <p>
                      Exploring web interfaces with more atmosphere, movement, and
                      visual identity.
                    </p>
                  </div>

                  <div className="status-card compact-card">
                    <span className="status-label">Cursor Mission</span>
                    <strong>Meteor Break Effect</strong>
                    <p>
                      Hover through the scene to collide with meteors and trigger
                      particle fragments.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          <section id="about" className="section">
            <div className="card">
              <span className="eyebrow">Mission Log</span>
              <h2>ABOUT ME</h2>
              <p className="maout">
                I enjoy both Web Development and Cybersecurity, especially work
                that goes beyond functionality and creates a more engaging and
                memorable experience.
              </p>
              <p className="maout">
                While I am still developing my skills, I am continuously learning
                and improving through hands-on practice and personal projects. I
                focus on building things that feel smoother, more thoughtful, and
                more user-friendly over time.
              </p>
              <p className="maout">
                My goal is to keep growing step by step, gaining more experience,
                and creating work that reflects both creativity and attention to
                detail.
              </p>
              <div className="tag-row">
                <span>React</span>
                <span>Animation</span>
                <span>Cybersecurity</span>
                <span>Creative UI</span>
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="card">
              <span className="eyebrow">Signal Channels</span>
              <h2>Contact</h2>
              <div className="links">
                <a href="https://discord.gg/UnaFyfgF" target="_blank" rel="noreferrer">
                  <DiscordIcon />
                  <span>Discord</span>
                </a>
                <a
                  href="https://www.facebook.com/ammarin.jampahom/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/ammarin_zerx?fbclid=IwY2xjawQyzElleHRuA2FlbQIxMABicmlkETFFNDNJU3lPbUNoTG5EUGZrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqHcYvXd34vN-pappwoGwiFuo8E3v1ROQBPm_Y-Gx6TwTrdcckvVBWwYO1P-_aem_BdPtjLxJST9wLncca16AuA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
                <a href="https://github.com/boom51zx" target="_blank" rel="noreferrer">
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
              </div>
              <p className="contact-note">
                Open to learning, new projects, and ideas that turn a normal
                website into something people remember.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
