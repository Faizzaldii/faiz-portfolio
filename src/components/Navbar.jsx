import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Link className="brand" to="/">FZ<span>.</span></Link>
        <div className="nav-links">
          <Link to="/work">Work</Link>
          <Link to="/#thinking">Thinking</Link>
          <Link to="/about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
