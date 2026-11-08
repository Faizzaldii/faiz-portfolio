
import { useCallback, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import ProjectDetail from './pages/ProjectDetail'
import PortfolioIntro from './components/PortfolioIntro'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const location = useLocation()

  const finishSplash = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      {showSplash && <PortfolioIntro onFinish={finishSplash} />}

      <div className={showSplash ? 'app-content app-content-hidden' : 'app-content'}>
        <Navbar />

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}
