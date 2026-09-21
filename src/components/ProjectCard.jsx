import { Link } from 'react-router-dom'
import Visual from './Visual'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <Link to={`/work/${project.id}`} className={`project-card project-${index + 1} card-${project.size || 'medium'}`}>
      <Visual project={project} />
      <div className="project-info">
        <div>
          <p className="eyebrow">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-role">{project.role}</p>
        <p className="project-description">{project.short}</p>
        <div className="tags">
          {project.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </Link>
  )
}
