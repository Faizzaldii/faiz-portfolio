import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import Visual from '../components/Visual'

const sectionGroups = [
  {
    label: '01 / CONTEXT',
    title: 'Understanding the challenge.',
    description:
      'The context, objectives, and responsibilities behind the project.',
    indices: [0, 1],
  },
  {
    label: '02 / EXECUTION',
    title: 'Turning plans into action.',
    description:
      'The planning, coordination, and decisions behind the execution.',
    indices: [2, 3, 4],
  },
  {
    label: '03 / OUTCOME',
    title: 'What the project delivered.',
    description:
      'The outputs, key takeaways, and lessons from the project.',
    indices: [5, 6, 7],
  },
]

function normalizeSection(section, index) {
  if (Array.isArray(section)) {
    return {
      title: section[0],
      description: section[1],
      index,
    }
  }

  return {
    title: section.title,
    description: section.description,
    index,
  }
}


function ProjectGallery({ project }) {
  const galleryImages = Array.isArray(project.gallery) ? project.gallery : []
  const slides = [
    { image: project.image, alt: `${project.title} — project cover` },
    ...galleryImages
      .filter((image) => image && image !== project.image)
      .map((image, index) => ({
        image,
        alt: `${project.title} — project image ${index + 2}`,
      })),
  ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  function changeSlide(direction) {
    if (slides.length < 2 || isChanging) return
    setIsChanging(true)
    setActiveIndex((current) => (current + direction + slides.length) % slides.length)
    window.setTimeout(() => setIsChanging(false), 650)
  }

  const activeSlide = slides[activeIndex]

  const imageUrl = activeSlide?.image
    ? import.meta.env.BASE_URL +
    (activeSlide.image.startsWith('/')
      ? activeSlide.image.slice(1)
      : activeSlide.image)
    : ''

  return (
    <section className="detail-cover detail-gallery container" aria-label="Project gallery">
      <div className={`detail-gallery-frame${isChanging ? ' is-changing' : ''}`}>
        {activeSlide?.image ? (
          <img
            key={activeSlide.image}
            className="detail-gallery-image"
            src={`${import.meta.env.BASE_URL}${activeSlide.image.replace(/^\//, '')}`}
            alt={activeSlide.alt || project.title}
          />
        ) : (
          <Visual project={project} className="detail-cover-visual" />
        )}
        <div className="detail-gallery-vignette" aria-hidden="true" />
        {slides.length > 1 && (
          <div className="detail-gallery-controls">
            <button
              className="gallery-arrow gallery-arrow-previous"
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous project image"
              disabled={isChanging}
            >
              <span aria-hidden="true">←</span>
            </button>
            <div className="detail-gallery-counter" aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <i />
              <span>{String(slides.length).padStart(2, '0')}</span>
            </div>
            <button
              className="gallery-arrow gallery-arrow-next"
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next project image"
              disabled={isChanging}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </div>
      <div className="detail-cover-caption">
        <span>{project.title} / PROJECT OVERVIEW</span>
        <span>{project.year}</span>
      </div>
      {slides.length > 1 && (
        <div className="detail-gallery-progress" aria-hidden="true">
          <span style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} />
        </div>
      )}
    </section>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) {
    return (
      <main className="page">
        <section className="container page-hero">
          <p className="eyebrow">404 / PROJECT NOT FOUND</p>
          <h1>
            This project
            <br />
            <em>doesn't exist.</em>
          </h1>
          <Link className="text-link" to="/work">
            Back to all work <span>↗</span>
          </Link>
        </section>
      </main>
    )
  }

  const sections = (project.sections || []).map(normalizeSection)
  const tools = Array.isArray(project.tools)
    ? project.tools.join(' · ')
    : project.tools || 'Information Systems'

  const isLunar = project.id === 'lunar'

  return (
    <main className="project-detail detail-editorial">
      <section className="detail-hero container">
        <Link className="back-link" to="/work">
          <span aria-hidden="true">←</span> Back to work
        </Link>

        <div className="editorial-intro">
          <div className="editorial-title">
            <p className="eyebrow accent">
              {project.type || 'Selected Project'}
            </p>
            <h1>{project.title}</h1>
            <p className="detail-intro">{project.intro}</p>
          </div>



          {[
            'hampiness-isad',
            'kopi-jago-dim',
            'timeless-cuisine',
            'sales-performance-analysis'
          ].includes(project.id) && (
              <aside className="project-documentation" aria-label="Project documentation">
                <span className="eyebrow">PROJECT DOCUMENTATION</span>
                <h3>Explore the full documentation.</h3>

                <p>
                  {project.id === 'hampiness-isad' &&
                    'Review the complete ISAD report, including system analysis, process models, UML diagrams, UI/UX designs, and system architecture.'}

                  {project.id === 'kopi-jago-dim' &&
                    'Review the complete Kopi Jago DIM report, including database design, data modeling, SQL implementation, normalization, and application workflows.'}

                  {project.id === 'timeless-cuisine' &&
                    'Review the complete Timeless Cuisine ISAD report, including problem analysis, DFD, UML diagrams, UI/UX designs, and three-tier system architecture.'}

                  {project.id === 'sales-performance-analysis' &&
                    'Review the complete Data Analytics report, including data cleaning, Excel functions, sensitivity analysis, Power Pivot, data visualization, and interactive dashboard development.'}
                </p>

                <div className="project-documentation-actions">
                  <a
                    href={
                      project.id === 'hampiness-isad'
                        ? 'https://drive.google.com/file/d/13QWOy1zhIv4SvgaPEkd1z-ayyRwy2LrB/view?usp=sharing'
                        : project.id === 'kopi-jago-dim'
                          ? 'https://drive.google.com/file/d/1cn7HkSEr1o11H0ukhEPbKZTbyHET0zxr/view?usp=drive_link'
                          : project.id === 'timeless-cuisine'
                            ? 'https://drive.google.com/file/d/1lXoXYSr9sBKLC6kTmUvp1eWXxAD6Botp/view?usp=drive_link'
                            : 'https://drive.google.com/file/d/1t2suPF2u8KRY7t-dg2rV_dkxoqS0r55b/view?usp=drive_link'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="document-link"
                  >
                    View Full Report <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={
                      project.id === 'hampiness-isad'
                        ? `${import.meta.env.BASE_URL}projects/Hampiness-isad/PROJECT-ISAD.pdf`
                        : project.id === 'kopi-jago-dim'
                          ? `${import.meta.env.BASE_URL}projects/dim-project/Project-DIM-Kelompok-Jago.pdf`
                          : project.id === 'timeless-cuisine'
                            ? `${import.meta.env.BASE_URL}projects/timeless-cuisine/project-isad-timeless-cuisine.pdf`
                            : `${import.meta.env.BASE_URL}projects/sales-performance-analysis/PROJECT-DATA-MODELLING.pdf`
                    }
                    download={
                      project.id === 'hampiness-isad'
                        ? 'Hampiness-ISAD.pdf'
                        : project.id === 'kopi-jago-dim'
                          ? 'Kopi-Jago-DIM.pdf'
                          : project.id === 'timeless-cuisine'
                            ? 'Timeless-Cuisine-ISAD.pdf'
                            : 'Sales-Performance-Analysis.pdf'
                    }
                    className="document-link document-link-secondary"
                  >
                    Download PDF <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </aside>
            )}
          <div className="editorial-facts">
            <div>
              <span>ROLE</span>
              <strong>{project.role || 'Project Contributor'}</strong>
            </div>
            <div>
              <span>YEAR</span>
              <strong>{project.year || '—'}</strong>
            </div>
            <div>
              <span>SCOPE</span>
              <strong>{isLunar ? '4 divisions' : tools}</strong>
            </div>
            {isLunar && (
              <div>
                <span>PERIOD</span>
                <strong>Mar – Aug 2026</strong>
              </div>
            )}
          </div>
        </div>

        {project.externalUrl && (
          <div className="detail-actions">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-button detail-button-primary"
            >
              {project.externalLabel || 'Explore project'} ↗
            </a>
          </div>
        )}
      </section>

      <ProjectGallery project={project} />

      {isLunar && (
        <section className="detail-highlights container">
          <div className="detail-highlights-heading">
            <p className="eyebrow">AT A GLANCE</p>
            <h2>
              One program.
              <br />
              <em>Four divisions.</em>
            </h2>
          </div>

          <div className="detail-highlight-grid">
            <article>
              <span>01</span>
              <h3>Planning</h3>
              <p>Timelines, task allocation, and execution plans.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Coordination</h3>
              <p>Cross-functional alignment with team leads and stakeholders.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Monitoring</h3>
              <p>Progress tracking, follow-ups, and operational problem-solving.</p>
            </article>
          </div>
        </section>
      )}

      <section className="detail-content container">
        <div className="detail-content-heading">
          <p className="eyebrow">INSIDE THE PROJECT</p>
          <h2>
            From thinking
            <br />
            <em>to execution.</em>
          </h2>
          <p>
            Explore the context, approach, and outcomes behind the work.
          </p>
        </div>

        {sectionGroups.map((group) => {
          const items = group.indices
            .map((index) => sections[index])
            .filter(Boolean)

          if (!items.length) return null

          return (
            <section
              className="detail-chapter"
              key={group.label}
            >
              <div className="detail-chapter-heading">
                <p className="eyebrow">{group.label}</p>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="detail-chapter-cards">
                {items.map((section) => (
                  <article
                    className="detail-story-card"
                    key={`${section.title}-${section.index}`}
                  >
                    <span className="detail-story-number">
                      {String(section.index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4>{section.title.replace(/^\d+\s*\/\s*/, '')}</h4>
                      <p>{section.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </section>

      <section className="next-project container">
        <p className="eyebrow">KEEP EXPLORING</p>
        <h2>
          More work.
          <br />
          <em>More perspectives.</em>
        </h2>
        <Link className="detail-button detail-button-primary" to="/work">
          Explore all projects <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  )
}
