export default function Visual({ project, className = '' }) {
  return (
    <div className={`project-visual visual-${project.fallback || 'default'} ${className}`}>
      <div className="visual-image" style={{ backgroundImage: `url(${project.image})` }} />
      <div className="visual-overlay" />
      <div className="project-number">{project.number || '01'}</div>
      <div className="project-year">{project.year}</div>
      <div className="project-placeholder">{project.title}</div>
    </div>
  )
}
