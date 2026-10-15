import { site } from '../data/site'
import { aboutContent } from '../data/siteContent'

export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero container">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h1>Creative thinking,<br /><em>systems thinking.</em></h1>
        <p>{site.intro}</p>
      </section>

      <section className="section container about-detail">
        <div><p className="eyebrow">THE SHORT VERSION</p></div>
        <div className="about-story">
          {aboutContent.shortVersion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="section container about-detail profile-data">
        <div><p className="eyebrow">CURRENT FOCUS</p></div>
        <div className="data-list">
          {aboutContent.currentFocus.map(([label, value]) => (
            <div key={label}><span>{label}</span><strong>{value}</strong></div>
          ))}
        </div>
      </section>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Faiz Zaldi</span>
        <span>Creative Strategist × Thoughtful Builder</span>
      </footer>
    </main>
  )
}
