import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import Visual from '../components/Visual'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)
  if (!project) return <main className="page"><div className="container page-hero"><h1>Project not found.</h1><Link className="text-link" to="/work">Back to work ↗</Link></div></main>
  return <main className="project-detail">
    <section className="detail-hero container"><Link className="back-link" to="/work">← Back to work</Link><div className="detail-heading"><p className="eyebrow">{project.type} · {project.year}</p><h1>{project.title}</h1><p>{project.intro}</p></div><Visual project={project} className="detail-visual" /></section>
    <section className="detail-body container"><aside><span>Role</span><strong>{project.role}</strong><span>Tags</span><strong>{project.tags.join(' · ')}</strong></aside><div>{project.sections.map(([heading, body]) => <section className="detail-section" key={heading}><p className="eyebrow">{heading}</p><p>{body}</p></section>)}</div></section>
    <section className="next-project"><Link to="/work">View all work ↗</Link></section>
  </main>
}
