import React, { useState, useRef } from 'react'
// import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
// import Navbar from './components/Navbar'
import Contact from './components/Contact'
import './App.css'
import './customize-scrollbar.css'
// import { navLinks } from './constants'

function App() {
  // const [active, setActive] = useState('Home')
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
  // const width = window.innerWidth
  // The width below which the mobile view should be rendered
  // const breakpoint = 620

  return (
    <div className="">
      <nav className="w-full flex px-10 py-8 justify-between items-center navbar font-roboto-mono bg-white sticky top-0 z-50">
        {/* <img src={require('../assets/images/logo_sub.png')} alt="hoobank" className="w-[124px] h-[32px]" /> */}
        <div className="text-[16px] text-slate-950 font-semibold">
          Chotie.Portfolio
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(home)}
            className="text-[16px] text-slate-950 font-semibold"
          >
            Home
          </li>
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(about)}
            className="text-[16px] text-slate-950 font-semibold ml-10"
          >
            About
          </li>

          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(projects)}
            className="text-[16px] text-slate-950 font-semibold ml-10"
          >
            Project
          </li>
          <li
            style={{ float: 'right' }}
            onClick={() => scrollToSection(contact)}
            className="text-[16px] text-slate-950 font-semibold ml-10"
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
            className="w-[20px] h-[20px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div>
            <ul>
              {!toggle ? null : (
                <div className=" p-6 bg-white absolute top-20 right-0 mx-4 mt-6 min-w-[180px] rounded-xl sidebar drop-shadow-lg">
                  <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    <li
                      onClick={() => scrollToSection(home)}
                      className="text-xl mb-6"
                    >
                      Home
                    </li>
                    <li
                      onClick={() => scrollToSection(about)}
                      className="text-xl mb-6"
                    >
                      About
                    </li>

                    <li
                      onClick={() => scrollToSection(projects)}
                      className="text-xl mb-6"
                    >
                      Project
                    </li>
                    <li
                      onClick={() => scrollToSection(contact)}
                      className="text-xl mb-3"
                    >
                      Contact
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div ref={home} className="home mb-48 lg:mb-[160px] lg:mt-[84px]">
        <Home />
      </div>
      <div ref={about} className="about mb-48 lg:mb-[160px] ">
        <About />
      </div>
      <div ref={projects} className="projects mb-48 lg:mb-[160px]">
        <Projects />
      </div>
      <div ref={contact} className="contact">
        <Contact />
      </div>
    </div>
  )
}

export default App
