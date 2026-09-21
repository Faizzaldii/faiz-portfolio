import { site } from '../data/site'
export default function About() {
  return <main className="about-page">
    <section className="page-hero container"><p className="eyebrow">01 / ABOUT ME</p><h1>Creative thinking,<br /><em>systems thinking.</em></h1><p>{site.intro}</p></section>
    <section className="section container about-detail"><div><p className="eyebrow">THE SHORT VERSION</p></div><div className="about-story"><p>I am an Information Systems student at BINUS University, interested in the space where business problems meet technology and people.</p><p>My natural pattern is to anticipate what might happen, structure what I know, explore possibilities, make a decision, and stay close enough to execution to make the idea work.</p><p>That has led me through project management, business case competitions, UX exploration, ERP learning, organizational work, and creative communication.</p></div></section>
    <section className="section container about-detail profile-data"><div><p className="eyebrow">CURRENT FOCUS</p></div><div className="data-list"><div><span>Education</span><strong>Information Systems · BINUS University</strong></div><div><span>Track</span><strong>Applied ERP</strong></div><div><span>Domains</span><strong>Business · Technology · Product · Projects</strong></div><div><span>Based in</span><strong>Jakarta, Indonesia</strong></div></div></section>
    <footer className="footer container"><span>© {new Date().getFullYear()} Faiz Zaldi</span><span>Creative Strategist × Thoughtful Builder</span></footer>
  </main>
}
