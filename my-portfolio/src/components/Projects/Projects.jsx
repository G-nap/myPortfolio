import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
    return (
        <div className='pj-layout'>

            <div className='pj-each-layout'>
                <div className='pj-each'>
                    <div className='pj-tag'>Project Experience</div>
                    <div className='pj-title'>BIZCHECK </div>
                    <div className='pj-dest'>
                        This thesis explains the development of a financial readiness assessment system for starting a business.
                        It uses the Financial Feasibility Canvas tool to assess readiness and presents the results of various financial assessments to users </div>
                    <div className='pj-img-layout'>
                        <img src={require('../../assets/images/p1.png')} alt='react-icon' className='pj-img' />
                    </div>
                    <div className='pj-link-layout'>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/poster.pdf')} target="_blank">Poster</a>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/report.pdf')} target="_blank">Report</a>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/presentation.pdf')} target="_blank">Presentation</a>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/installManual.pdf')} target="_blank">Installation Manual</a>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/devManual.pdf')} target="_blank">Developer Manual</a>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/userManual.pdf')} target="_blank">User Manual</a>
                        <a className='pj-link' rel="noopener noreferrer" href="https://youtu.be/3-fQs_ylsuI" target="_blank">YouTube</a>
                        <a className='pj-link' rel="noopener noreferrer" href="https://github.com/G-nap/CE65-20" target="_blank">Code</a>
                    </div>
                </div>
            </div>

            <div className='pj-each-2'>
                <div className='pj-each-2-boxL'>
                    <div className='useer-textbox'>
                        <div className='pj-title-2'>U seer</div>
                        <div className='pj-dest-start'>
                        Embark on a cosmic journey with our Horoscope app – your gateway to a myriad of celestial insights. Immerse yourself in diverse horoscopes from various faiths, curated with care. Connect with seasoned fortune tellers, each boasting a proven track record. Reserve your spot, engage in enlightening conversations through calls, chat, or video, and share your experiences by rating them with stars. Join our thriving community, where you can freely express your thoughts and explore the spiritual cosmos together. Horoscope Mobile Application UX/UI Design crafted using Figma.
                        </div>
                        <div className='pj-link-layout'>
                            <a className='pj-link' rel="noopener noreferrer" href="https://www.canva.com/design/DAFRSrP5N-M/OStE5U3NzNTZ1TJsn9A4RQ/edit?utm_content=DAFRSrP5N-M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Presentation</a>
                            <a className='pj-link' rel="noopener noreferrer" href="https://www.figma.com/file/k50zEdEE5gnrrOIrbeurK9/U-seer?type=design&node-id=0%3A1&mode=design&t=Q2ERsTh3ovFM1CAB-1" target="_blank">Figma</a>
                            <a className='pj-link' rel="noopener noreferrer" href="https://www.figma.com/proto/k50zEdEE5gnrrOIrbeurK9/U-seer?page-id=0%3A1&node-id=89-324&starting-point-node-id=89%3A324&mode=design&t=y0eLCdsGKDo46WZ5-1" target="_blank">Demo</a>
                        </div>
                    </div>    
                </div>
                <div className='pj-img-layout-2'>
                    <img src={require('../../assets/images/p2.png')} alt='react-icon' className='pj-img-2' />
                </div>
            </div>

            <div className='pj-each-layout-3'>
                <div className='pj-each-3'>
                    <div className='pj-each-layout-3L'>
                        <div className='pj-img-layout-3'>
                            <img src={require('../../assets/images/p3.png')} alt='react-icon' className='pj-img-3' />
                        </div>
                    </div>
                    <div className='pj-each-layout-3R '>
                        <div className='pj-title-start'>Daisuki Figure </div>
                        <div className='pj-dest-start'>
                            An eCommerce Figures Community Web Project crafted for enthusiasts passionate about collecting, selling, or discussing figures. We designed, developed, and coded this web application using the MERN stack. My responsibilities included UI design and frontend development.
                            {/* Built using the MERN stack (MongoDB, Express.js, React.js, Node.js). */}
                        </div>
                        <div className='pj-link-layout'>
                            <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/disuki/report.pdf')} target="_blank">Report</a>
                            <a className='pj-link' rel="noopener noreferrer" href="https://github.com/G-nap/Daisukifigure" target="_blank">Code</a>
                        </div>
                    </div>


                    {/* <div className='pj-link'><div className='pj-dest'> It is a long established fact that a reader</div> </div> */}
                </div>
            </div>

            <div className='pj-each-layout-row'>
                <div className='pj-5-icon1'>
                    <img src={require('../../assets/images/Candy_walk.gif')} alt='react-icon' className='pj-img-5-icon' />
                </div>
                <div className='pj-each-5'>
                    <div className='pj-title'>Candy Thief</div>
                    <div className='pj-dest'>
                        In this 2D Adventure game, your mission is to chase down the elusive rabbit that has pilfered Lollytaffy's candy and reclaim it. Navigate through the game world, searching for and collecting keys hidden within the rabbit hole to unlock the bandit rabbit's lair. Prepare for an exciting showdown as you engage in a fight to reclaim Lollytaffy's precious sweets! This game is developed using SFML and C++.
                    </div>
                    {/* <div className='pj-img-layout-5'> */}
                    <img src={require('../../assets/images/p5.png')} alt='react-icon' className='pj-img-5' />
                    {/* </div> */}
                    <div className='pj-link-layout'>
                        <a className='pj-link' rel="noopener noreferrer" href={require('../../assets/documents/candy/poster.jpg')} target="_blank">Poster</a>
                        <a className='pj-link' rel="noopener noreferrer" href="https://youtu.be/Yqx6YpGHiDs?si=0eNzBMnth-aRz4Ej" target="_blank">YouTube</a>
                        <a className='pj-link' rel="noopener noreferrer" href="https://github.com/G-nap/CandyThief" target="_blank">Code</a>
                    </div>
                </div>
                <div className='pj-5-icon2'>
                    <img src={require('../../assets/images/p5-2.png')} alt='react-icon' className='' />
                </div>
            </div>

        </div>
    )
}

export default Projects
