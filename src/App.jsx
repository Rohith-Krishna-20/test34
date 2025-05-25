import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trips from './components/Trips'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Students from './components/Students'
import Socials from './components/Socials'
import Contact from './components/Contact'
import TerminalEasterEgg from './components/TerminalEasterEgg'
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cyber-darker text-white relative overflow-x-hidden">
        <BackgroundEffects />
        <div className="scanlines">
          <Navbar />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="trips">
              <Trips />
            </section>
            <section id="events">
              <Events />
            </section>
            <section id="gallery">
              <Gallery />
            </section>
            <section id="students">
              <Students />
            </section>
            <section id="socials">
              <Socials />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <TerminalEasterEgg />
        </div>
      </div>
    </Router>
  )
}

export default App
