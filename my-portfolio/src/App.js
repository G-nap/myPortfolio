import React, { useRef } from 'react'
// import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import './App.css'
import './customize-scrollbar.css'

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 60,
      behavior: 'smooth',
    })
  }
  return (
    <div className="">
      {/* <ScrollToTop /> */}
      <div className="nav">
        <ul>
          <li
            style={{ float: 'left' }}
            onClick={() => scrollToSection(home)}
            className="link-h1"
          >
            Chotie.Portfolio
          </li>
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(contact)}
            className="link"
          >
            Contact
          </li>

          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(projects)}
            className="link"
          >
            Project
          </li>
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(about)}
            className="link"
          >
            About
          </li>
        </ul>
        <li
          style={{ float: 'right' }}
          onClick={() => scrollToSection(home)}
          className="link"
        >
          Home
        </li>
      </div>
      <div ref={home} className="home slide-bottom">
        <Home />
      </div>
      <div ref={about} className="about">
        <About />
      </div>
      <div ref={projects} className="projects">
        <Projects />
      </div>
      <div ref={contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  )
}

export default App
