
import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onFinish }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setExiting(true)
    }, 1700)

    const finishTimer = window.setTimeout(() => {
      onFinish()
    }, 2300)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div className={`splash-screen${exiting ? ' splash-exit' : ''}`}>
      <div className="splash-orbit splash-orbit-one" />
      <div className="splash-orbit splash-orbit-two" />

      <div className="splash-content">
        <span className="splash-index">PORTFOLIO / 2026</span>

        <div className="splash-monogram">
          <span>Faiz   </span>
          <span className="splash-monogram-z">   Zaldi</span>
        </div>

        <div className="splash-divider" />

        <h1>FAIZ ZALDI<span>.</span></h1>

        <p>BUSINESS × TECHNOLOGY × CREATIVE THINKING</p>
      </div>

      <span className="splash-bottom-left">INFORMATION SYSTEMS</span>
      <span className="splash-bottom-right">EST. 2024</span>
    </div>
  )
}
