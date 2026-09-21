import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const thinkingModes = ['Creative', 'Systems', 'Business', 'Product', 'Human'];
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMode((current) => (current + 1) % thinkingModes.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return <main id="top">
    <section className="hero container">
      <div className="hero-meta"><span>01 / PORTFOLIO</span><span>{site.location}</span></div>
      <div className="hero-main">
        <p className="eyebrow accent">Information Systems · Business · Technology</p>
        <div className="hero-identity"> <strong>Faiz Zaldi</strong>
          <span>Information Systems Student · BINUS University</span>
        </div>
        <h1>Where Strategic Thinking<br />
          <em key={thinkingModes[mode]} className="hero-rotating"> Meets {thinkingModes[mode]} Thinking.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-statement">I turn complex problems into creative solutions.</p>
          <Link className="text-link" to="/work">Explore work <span>↗</span></Link>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="hero-portrait-glow"></div>
        <img
          src={`${import.meta.env.BASE_URL}profile/Faiz-Formal-Glow.png`}
          alt="Faiz Zaldi"
        />
      </div>

      <div className="hero-mark">FZ</div>
    </section>

    <section className="section container" id="work">
      <div className="section-head">
        <div><p className="eyebrow">02 / SELECTED WORK</p><h2>Things I’ve built,<br /><em>shaped, and solved.</em></h2></div>
        <div className="section-head-right"><p className="section-note">A curated selection across project management, business, product, UX, and technology.</p><Link className="text-link" to="/work">See all work <span>↗</span></Link></div>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>

    <section id="thinking" className="thinking-section">
      <div className="container thinking-grid">
        <div><p className="eyebrow">03 / HOW I THINK</p><h2>Ideas need<br /><em>structure.</em></h2></div>
        <div className="thinking-copy">
          <p className="large-copy">I enjoy working where creativity meets complexity — turning possibilities into decisions, and decisions into things that work.</p>
          <div className="process">{['Understand', 'Structure', 'Explore', 'Decide', 'Build', 'Improve'].map((step, index) => <div className="process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}</div>
        </div>
      </div>
    </section>

    <section className="section container about-section">
      <div><p className="eyebrow">04 / ABOUT</p><h2>Information Systems<br /><em>with a creative edge.</em></h2></div>
      <div className="about-copy"><p>I’m Faiz, an Information Systems student at BINUS University interested in the space between business, technology, product, and people.</p><p>My work tends to move between analysis and making: understanding a problem, exploring possibilities, structuring a direction, and getting it into execution.</p><Link className="text-link" to="/about">More about me <span>↗</span></Link></div>
    </section>

    <section id="contact" className="contact-section">
      <div className="container contact-inner"><p className="eyebrow">05 / CONTACT</p><h2>Have a problem<br /><em>worth exploring?</em></h2><a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a><div className="contact-links"><a href={site.linkedin}>LinkedIn ↗</a><a href={site.github}>GitHub ↗</a></div></div>
    </section>
    <footer className="footer container"><span>© {new Date().getFullYear()} Faiz Zaldi</span><span>Built with curiosity & systems thinking.</span></footer>
  </main>
}
