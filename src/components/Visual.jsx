
export default function Visual({ project, className = '' }) {
  const imageUrl = `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`

  return (
    <div className={`project-visual visual-${project.fallback || 'default'} ${className}`}>
      <div
        className="visual-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  )
}
