import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (window.history.replaceState) window.history.replaceState(null, '', `#${sectionId}`)
  }

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1)
      const timer = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
      return () => window.clearTimeout(timer)
    }
  }, [location.pathname, location.hash])

  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Faiz Zaldi<span>.</span></Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <a href={`${import.meta.env.BASE_URL}#about`} onClick={(event) => { event.preventDefault(); scrollToSection('about') }}>About</a>
          <a href={`${import.meta.env.BASE_URL}#contact`} onClick={(event) => { event.preventDefault(); scrollToSection('contact') }}>Contact</a>
        </div>
      </nav>
    </header>
  )
}
