import "./App.css";
import ParticleBackground from "./ParticleBackground";

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
                <h1>lnwAmmarin</h1>
                <p className="subtitle">
                  React Explorer | Cybersecurity Enthusiast | Building in Orbit
                </p>
                <p className="about">
                  พื้นที่เล็ก ๆ กลางจักรวาลสำหรับแนะนำตัวตน งานที่กำลังฝึก และสิ่งที่อยาก
                  พัฒนาให้กลายเป็นโปรเจกต์ที่ใช้งานได้จริง
                </p>
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
                <div className="status-card">
                  <span className="status-label">Current Orbit</span>
                  <strong>Frontend + Motion UI</strong>
                  <p>
                    กำลังทดลองสร้างเว็บที่มี movement, atmosphere และ interaction
                    ให้รู้สึกมีชีวิตมากขึ้น
                  </p>
                </div>
                <div className="status-card">
                  <span className="status-label">Cursor Mission</span>
                  <strong>Meteor Break Effect</strong>
                  <p>
                    ลองเอาเมาส์ไปชนอุกาบาตที่วิ่งผ่านฉากเพื่อดูเอฟเฟกต์แตกกระจายแบบประกายแสง
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section id="about" className="section">
            <div className="card">
              <span className="eyebrow">Mission Log</span>
              <h2>About Me</h2>
              <p className="about">
                ผมสนใจทั้งฝั่ง Web Development และ Cybersecurity โดยเฉพาะงานที่ทำให้
                ประสบการณ์บนเว็บดูน่าจดจำ ไม่ใช่แค่ใช้งานได้ แต่ต้องรู้สึกสนุกและมีเอกลักษณ์ด้วย
              </p>
              <p className="about">
                เป้าหมายคือค่อย ๆ สะสมทักษะ React, JavaScript และงานออกแบบอินเทอร์เฟซ
                เพื่อพัฒนาเว็บไซต์ที่สวยขึ้น ลื่นขึ้น และสะท้อนตัวตนได้ชัดขึ้นทุกครั้งที่ทำ
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
                  Discord
                </a>
                <a
                  href="https://www.facebook.com/ammarin.jampahom/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/ammarin_zerx?fbclid=IwY2xjawQyzElleHRuA2FlbQIxMABicmlkETFFNDNJU3lPbUNoTG5EUGZrc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqHcYvXd34vN-pappwoGwiFuo8E3v1ROQBPm_Y-Gx6TwTrdcckvVBWwYO1P-_aem_BdPtjLxJST9wLncca16AuA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="https://github.com/boom51zx" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <p className="contact-note">
                พร้อมเปิดรับการเรียนรู้ โปรเจกต์ใหม่ และไอเดียที่พาเว็บธรรมดาให้กลายเป็นงานที่น่าจำ
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
