import { allProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  return <main className="work-page">
    <section className="page-hero container"><p className="eyebrow">01 / WORK ARCHIVE</p><h1>Selected <em>work.</em></h1><p>Projects across business, technology, product, UX, and project management. Newest first.</p></section>
    <section className="section container"><div className="project-grid archive-grid">{allProjects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}</div></section>
    <footer className="footer container"><span>© {new Date().getFullYear()} Faiz Zaldi</span><span>All work · Newest first</span></footer>
  </main>
}
