
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { featuredProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

import { homeContent } from '../data/siteContent'

const { thinkingModes, processSteps, recognitions } = homeContent

export default function Home() {
  const [mode, setMode] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMode((current) => (current + 1) % thinkingModes.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main id="top">
      {/* HERO */}
      <section className="hero container">
        <div className="hero-meta">
          <span>01 / PORTFOLIO</span>
          <span>{site.location}</span>
        </div>

        <div className="hero-main">
          <p className="eyebrow accent">
            Information Systems · Business · Technology
          </p>

          <div className="hero-identity">
            <strong>Muhammad Faiz Zaldi</strong>
            <span>Information Systems Student · Applied Enterprise Resource Process · BINUS University</span>
          </div>

          <h1>
            Where Strategic
            <br />
            Thinking
            <br />
            <em className="hero-rotating">
              <span className="hero-meets">Meets</span>{' '}
              <span key={thinkingModes[mode]} className="hero-mode">
                {thinkingModes[mode]}
              </span>
              <br />
              <span className="hero-thinking">Thinking.</span>
            </em>
          </h1>


          <div className="hero-bottom">
            <p className="hero-statement">
              I turn complex problems into creative solutions.
            </p>

            <div className="hero-actions">
              <Link className="text-link" to="/work">
                Explore work <span>↗</span>
              </Link>

              <a
                className="text-link"
                href={`${import.meta.env.BASE_URL}cv/CV-MuhammadFaizZaldi.pdf`}
                download
              >
                Download CV <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="hero-portrait-glow" />
          <img
            src={`${import.meta.env.BASE_URL}profile/Faiz-Formal-Glow.png`}
            alt=""
          />
        </div>

        <div className="hero-mark" aria-hidden="true">
          Faiz Zaldi
        </div>
      </section>


      <div className="editorial-ticker" aria-label="Areas of interest">
        <div className="ticker-track" aria-hidden="true">
          <span>Business</span><span className="ticker-dot">★</span>
          <em>Understand deeply</em><span className="ticker-dot">★</span>
          <span>Technology</span><span className="ticker-dot">★</span>
          <em>Structure clearly</em><span className="ticker-dot">★</span>
          <span>Product</span><span className="ticker-dot">★</span>
          <em>Explore possibilities</em><span className="ticker-dot">★</span>
          <span>Projects</span><span className="ticker-dot">★</span>
          <em>Build with purpose</em><span className="ticker-dot">★</span>
          <span>Business</span><span className="ticker-dot">★</span>
          <em>Understand deeply</em><span className="ticker-dot">★</span>
          <span>Technology</span><span className="ticker-dot">★</span>
          <em>Structure clearly</em><span className="ticker-dot">★</span>
          <span>Product</span><span className="ticker-dot">★</span>
          <em>Explore possibilities</em><span className="ticker-dot">★</span>
          <span>Projects</span><span className="ticker-dot">★</span>
          <em>Build with purpose</em><span className="ticker-dot">★</span>
        </div>
      </div>


      {/* SELECTED WORK */}
      <section className="section container reveal" id="work">
        <div className="section-head">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              Things I’ve built,
              <br />
              <em>shaped, and solved.</em>
            </h2>
          </div>

          <div className="section-head-right">
            <p className="section-note">
              A curated selection across project management, business,
              product, UX, and technology.
            </p>

            <Link className="text-link" to="/work">
              See all work <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* THINKING */}
      <section className="section container reveal" id="thinking">
        <div className="thinking-grid">
          <div>
            <p className="eyebrow">03 / HOW I THINK</p>
            <h2>
              Ideas need
              <br />
              <em>structure.</em>
            </h2>
          </div>

          <div className="thinking-copy">
            <p className="large-copy">
              I enjoy working where creativity meets complexity, turning
              possibilities into decisions and decisions into things that work.
            </p>

            <div className="process">
              {processSteps.map((step, index) => (
                <div className="process-step" key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT ME */}
      <section className="recognition-section about-section reveal" id="about-me">
        <div className="recognition-inner">
          <div className="recognition-heading">
            <span className="eyebrow">04 / ABOUT ME</span>

            <h2>
              <span>Business</span>
              <br />
              <em>meets technology.</em>
            </h2>

            <p>
              I'm an Information Systems undergraduate at BINUS University,
              specializing in Applied ERP. I explore how business processes,
              technology, and creative thinking can come together to solve
              real-world problems.
            </p>

            <div className="about-meta">
              <span>BINUS UNIVERSITY</span>
              <span>INFORMATION SYSTEMS</span>
              <span>APPLIED ERP</span>
            </div>
          </div>

          <div className="about-explorer">
            <span className="about-explorer-label">
              GET TO KNOW MY PERSPECTIVE
            </span>

            <div className="about-tabs">
              <button
                type="button"
                className="about-tab is-active"
                onClick={(e) => {
                  const panel = e.currentTarget.closest(".about-explorer");
                  panel.querySelectorAll(".about-tab").forEach((tab) => {
                    tab.classList.remove("is-active");
                  });
                  e.currentTarget.classList.add("is-active");
                  panel.querySelector(".about-panel-number").textContent = "01";
                  panel.querySelector(".about-panel-title").textContent =
                    "Understanding the why.";
                  panel.querySelector(".about-panel-description").textContent =
                    "I explore business problems, analyze their root causes, and structure ideas into practical recommendations.";
                  panel.querySelector(".about-panel-tags").textContent =
                    "Business Analysis · Strategy · Process Thinking";
                }}
              >
                Business
              </button>

              <button
                type="button"
                className="about-tab"
                onClick={(e) => {
                  const panel = e.currentTarget.closest(".about-explorer");
                  panel.querySelectorAll(".about-tab").forEach((tab) => {
                    tab.classList.remove("is-active");
                  });
                  e.currentTarget.classList.add("is-active");
                  panel.querySelector(".about-panel-number").textContent = "02";
                  panel.querySelector(".about-panel-title").textContent =
                    "Making systems work.";
                  panel.querySelector(".about-panel-description").textContent =
                    "I'm exploring how ERP and enterprise technology connect people, processes, and data across an organization.";
                  panel.querySelector(".about-panel-tags").textContent =
                    "Applied ERP · Odoo · Data & Systems";
                }}
              >
                Technology
              </button>

              <button
                type="button"
                className="about-tab"
                onClick={(e) => {
                  const panel = e.currentTarget.closest(".about-explorer");
                  panel.querySelectorAll(".about-tab").forEach((tab) => {
                    tab.classList.remove("is-active");
                  });
                  e.currentTarget.classList.add("is-active");
                  panel.querySelector(".about-panel-number").textContent = "03";
                  panel.querySelector(".about-panel-title").textContent =
                    "Turning needs into solutions.";
                  panel.querySelector(".about-panel-description").textContent =
                    "I enjoy exploring user needs, shaping product ideas, and connecting business goals with meaningful user experiences.";
                  panel.querySelector(".about-panel-tags").textContent =
                    "Product Thinking · UX · Problem Solving";
                }}
              >
                Product
              </button>

              <button
                type="button"
                className="about-tab"
                onClick={(e) => {
                  const panel = e.currentTarget.closest(".about-explorer");
                  panel.querySelectorAll(".about-tab").forEach((tab) => {
                    tab.classList.remove("is-active");
                  });
                  e.currentTarget.classList.add("is-active");
                  panel.querySelector(".about-panel-number").textContent = "04";
                  panel.querySelector(".about-panel-title").textContent =
                    "Giving ideas a form.";
                  panel.querySelector(".about-panel-description").textContent =
                    "My creative side comes through visual design, art direction, and storytelling, helping me communicate ideas with clarity.";
                  panel.querySelector(".about-panel-tags").textContent =
                    "Visual Design · Art Direction · Storytelling";
                }}
              >
                Creative
              </button>
            </div>

            <div className="about-panel" aria-live="polite">
              <span className="about-panel-number">01</span>
              <h3 className="about-panel-title">Understanding the why.</h3>
              <p className="about-panel-description">
                I explore business problems, analyze their root causes, and
                structure ideas into practical recommendations.
              </p>
              <span className="about-panel-tags">
                Business Analysis · Strategy · Process Thinking
              </span>
            </div>

            <span className="about-explorer-footnote">
              FOUR PERSPECTIVES. ONE CONTINUOUS CURIOSITY.
            </span>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section className="section container contact-section reveal" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">06 / SAY HELLO</p>

          <h2>
            Have a problem
            <br />
            <em>worth exploring?</em>
          </h2>

          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>


          <div className="contact-links">
            <a
              className="contact-social"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.05-.02-2.4-1.47-2.4-1.47 0-1.7 1.15-1.7 2.33V18h-3V9h2.88v1.23h.04c.4-.71 1.38-1.47 2.84-1.47C18.63 8.76 19 10.7 19 13.2V18Z"
                />
              </svg>
              <span>LinkedIn</span>
              <span className="contact-social-arrow">↗</span>
            </a>

            <a
              className="contact-social"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my Instagram profile"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
              <span>Instagram</span>
              <span className="contact-social-arrow">↗</span>
            </a>

            <a
              className="contact-social"
              href={`mailto:${site.email}`}
              aria-label="Send me an email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="2.5"
                  y="4.5"
                  width="19"
                  height="15"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m3.5 6 8.5 7 8.5-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Gmail</span>
              <span className="contact-social-arrow">↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        <span>© {new Date().getFullYear()} Faiz Zaldi</span>
        <span>Built with curiosity & systems thinking.</span>
      </footer>
    </main>
  )
}
