import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import Visual from '../components/Visual'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) {
    return (
      <main className="page">
        <div className="container page-hero">
          <h1>Project not found.</h1>

          <Link className="text-link" to="/work">
            Back to work
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail">

      {/* HERO */}
      <section className="detail-hero container">

        <Link className="back-link" to="/work">
          ← Back to work
        </Link>

        <div className="detail-heading">

          <p className="eyebrow">
            {project.type}
          </p>

          <h1>
            {project.title}
          </h1>

          <p className="detail-intro">
            {project.intro}
          </p>

        </div>

        <div className="detail-actions">
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="detail-button detail-button-primary"
            >
              Visit Jakarta Capuche ↗
            </a>
          )}

          <a
            href={`${import.meta.env.BASE_URL}projects/jakarta-capuche/Jakarta-Capuche-Portfolio.pdf`}
            download
            className="detail-button detail-button-secondary"
          >
            Download Case Study ↓
          </a>
        </div>

      </section>


      {/* PROJECT VISUAL */}
      <section className="detail-cover container">
        <Visual project={project} />
      </section>


      {/* CONTENT */}
      <section className="detail-content container">

        {project.sections?.map((section, index) => (
          <article
            className="detail-section"
            key={section.title}
          >

            <div className="detail-section-number">
              0{index + 1}
            </div>

            <div>
              <h2>{section.title}</h2>

              <p>
                {section.description}
              </p>
            </div>

          </article>
        ))}

      </section>


      {/* FOOTER */}
      <section className="next-project container">

        <Link to="/work">
          View all work →
        </Link>

      </section>

    </main>
  )
}