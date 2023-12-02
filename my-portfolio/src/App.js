import React, { useState, useRef } from 'react'
// import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar'
import './App.css'
import './customize-scrollbar.css'
import { navLinks } from './constants'

function App() {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

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

  // The current width of the viewport
  const width = window.innerWidth
  // The width below which the mobile view should be rendered
  const breakpoint = 620

  return (
    <div className="">
      <nav className="w-full flex px-10 py-6 justify-between items-center navbar font-roboto-mono bg-white sticky top-0 z-50">
        {/* <img src={require('../assets/images/logo_sub.png')} alt="hoobank" className="w-[124px] h-[32px]" /> */}
        <div className="text-[16px] text-slate-950">Chotie.Portfolio</div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(home)}
            className="link"
          >
            Home
          </li>
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(about)}
            className="link"
          >
            About
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
            onClick={() => scrollToSection(contact)}
            className="link"
          >
            Contact
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={
              toggle
                ? require('./assets/images/close.png')
                : require('./assets/images/menu.png')
            }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div>
            <ul>
              {!toggle ? null : (
                <div className=" p-6 bg-white absolute top-20 right-0 mx-4 mt-6 min-w-[180px] rounded-xl sidebar drop-shadow-lg">
                  <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    <li
                      onClick={() => scrollToSection(home)}
                      className="text-2xl mb-6"
                    >
                      Home
                    </li>
                    <li
                      onClick={() => scrollToSection(about)}
                      className="text-2xl mb-6"
                    >
                      About
                    </li>

                    <li
                      onClick={() => scrollToSection(projects)}
                      className="text-2xl mb-6"
                    >
                      Project
                    </li>
                    <li
                      onClick={() => scrollToSection(contact)}
                      className="text-2xl mb-3"
                    >
                      Contact
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>

          {/* <div
            className={`
            ${!toggle ? 'hidden' : 'flex'} 
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col"> */}

          {/* {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))} */}

          {/* <li
                style={{ float: 'right' }}
                onClick={() => scrollToSection(home)}
                className="link"
              >
                Home
              </li>
              <li
                style={{ float: 'right' }}
                onClick={() => scrollToSection(about)}
                className="link"
              >
                About
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
                onClick={() => scrollToSection(contact)}
                className="link"
              >
                Contact
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      {/* <ScrollToTop /> */}
      {/* <Navbar/> */}

      {/* <div className="nav">
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

          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(home)}
            className="link"
          >
            Home
          </li>
        </ul>
      </div> */}
      <div ref={home} className="home">
        {/* {width < breakpoint ? null : <Home />} */}
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
