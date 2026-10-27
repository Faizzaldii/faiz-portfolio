
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { allProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'Leadership', 'Competition', 'Projects', 'Certifications']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return allProjects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' ||
        project.category === activeCategory

      const searchableText = [
        project.title,
        project.short,
        project.intro,
        project.type,
        project.role,
        ...(project.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return matchesCategory && searchableText.includes(query)
    })
  }, [activeCategory, searchQuery])

  return (
    <main className="work-page">
      <section className="page-hero container">
        <Link className="back-link" to="/">
          ← Home
        </Link>

        <p className="eyebrow">01 / WORK ARCHIVE</p>

        <h1>Selected work.</h1>

        <div className="work-intro">
          <p>
            Projects across leadership, competitions, business,
            technology, product, and UX.
          </p>

          <span className="work-count">
            {String(filteredProjects.length).padStart(2, '0')} PROJECTS
          </span>
        </div>

        <div className="work-controls">
          <div className="work-filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`work-filter ${activeCategory === category ? 'is-active' : ''
                  }`}
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="work-search">
            <span aria-hidden="true">⌕</span>

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects..."
              aria-label="Search projects"
            />

            {searchQuery && (
              <button
                type="button"
                className="work-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>
        </div>
      </section>

      <section className="section container">
        {filteredProjects.length > 0 ? (
          <div className="project-grid archive-grid" key={activeCategory + searchQuery}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="work-empty">
            <p className="eyebrow">NO MATCHES FOUND</p>
            <h2>
              Nothing here
              <br />
              <em>just yet.</em>
            </h2>
            <p>Try another keyword or choose a different category.</p>

            <button
              type="button"
              className="work-filter is-active"
              onClick={() => {
                setActiveCategory('All')
                setSearchQuery('')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="next-project container">
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
        <h2>
          Let’s explore
          <br />
          <em>what’s possible.</em>
        </h2>

        <Link
          className="detail-button detail-button-primary"
          to="/#contact"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Faiz Zaldi</span>
        <span>All work · Newest first</span>
      </footer>
    </main>
  )
}
