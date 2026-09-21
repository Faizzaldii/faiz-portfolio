export default function Visual({ project, className = '' }) {
  const imageUrl = `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`

  return (
    <div className={`project-visual visual-${project.fallback || 'default'} ${className}`}>
      <div
        className="visual-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="visual-overlay">
        <div className="project-number">{project.number || '01'}</div>
        <div className="project-year">{project.year}</div>
        <div className="project-placeholder">{project.title}</div>
      </div>
    </div>
  )
}