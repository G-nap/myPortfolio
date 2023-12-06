import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
    return (
        <div className='w-3/4 mt-10 md:w-3/4 lg:w-3/5 xl:w-3/5 2xl:w-3/5'>

            <div className=''>
                <div className='mb-36 lg:mb-64'>
                    <div className='font-roboto-mono text-xl text-[#9191ff] font-bold'>Project Experience</div>
                    <div className='font-roboto-mono font-bold text-2xl my-6'>BIZCHECK </div>
                    <div className='font-roboto-mono text-xl md:col-span-2'>
                        This thesis explains the development of a financial readiness assessment system for starting a business.
                        It uses the Financial Feasibility Canvas tool to assess readiness and presents the results of various financial assessments to users </div>
                    <div className=''>
                        <img src={require('../../assets/images/p1.png')} alt='react-icon' className='pj-img' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 font-roboto-mono'>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://github.com/G-nap/CE65-20" target="_blank">Code</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/report.pdf')} target="_blank">Report</a>
                        <a className='shadow-md p-4  font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/poster.pdf')} target="_blank">Poster</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://youtu.be/3-fQs_ylsuI" target="_blank">YouTube</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/presentation.pdf')} target="_blank">Presentation</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/userManual.pdf')} target="_blank">User Manual</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/devManual.pdf')} target="_blank">Developer Manual</a>
                        <a className='shadow-md p-4 font-semibold rounded-lg hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/CE65-20/installManual.pdf')} target="_blank">Installation Manual</a>
                    </div>
                </div>
            </div>


            <div className='my-36 lg:mb-44'>
                <div className=''>
                    <div className='font-roboto-mono font-bold text-2xl my-6'>U seer</div>
                    <div className='font-roboto-mono text-xl md:col-span-2 '>
                        Embark on a cosmic journey with our Horoscope app – your gateway to a myriad of celestial insights. Immerse yourself in diverse horoscopes from various faiths, curated with care. Connect with seasoned fortune tellers, each boasting a proven track record. Reserve your spot, engage in enlightening conversations through calls, chat, or video, and share your experiences by rating them with stars. Join our thriving community, where you can freely express your thoughts and explore the spiritual cosmos together. Horoscope Mobile Application UX/UI Design crafted using Figma.
                    </div>
                    <div className='lg:grid lg:grid-cols-2 '>
                        <div className='flex justify-center items-center'>
                            <img src={require('../../assets/images/useer-w.png')} alt='react-icon' className='rounded-2xl my-6 lg:my-9 ' />
                        </div>
                        <div className='grid grid-cols-1 gap-4 font-roboto-mono col-span-1 row-span-1 lg:p-8 h-72 '>
                            <a className='z-40 shadow-md p-4 font-semibold rounded-lg bg-white hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://www.figma.com/proto/k50zEdEE5gnrrOIrbeurK9/U-seer?page-id=0%3A1&node-id=89-324&starting-point-node-id=89%3A324&mode=design&t=y0eLCdsGKDo46WZ5-1" target="_blank">Demo</a>
                            <a className='z-40 shadow-md p-4 font-semibold rounded-lg bg-white hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://www.figma.com/file/k50zEdEE5gnrrOIrbeurK9/U-seer?type=design&node-id=0%3A1&mode=design&t=Q2ERsTh3ovFM1CAB-1" target="_blank">Figma</a>
                            <a className='z-40 shadow-md p-4 font-semibold rounded-lg bg-white hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://www.canva.com/design/DAFRSrP5N-M/OStE5U3NzNTZ1TJsn9A4RQ/edit?utm_content=DAFRSrP5N-M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">Presentation</a>
                            <div className='flex justify-end'>
                                {/* <img src={require('../../assets/images/tarot.gif')} alt='react-icon' className='h-32 ' /> */}
                                {/* <img src={require('../../assets/images/tarot.gif')} alt='react-icon' className='h-32 ' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-36 lg:mb-64'>
                <div className='lg:shadow-md lg:rounded-2xl lg:bg-white lg:p-11'>
                    <div className='lg:grid lg:grid-cols-3 lg:grid-rows-6'>
                        <div className='font-roboto-mono font-bold text-2xl lg:col-span-1 flex lg:items-end lg:pl-2'>Daisuki Figure </div>
                        <div className='my-10 lg:col-span-2 lg:row-span-6 flex lg:pl-10 xl:justify-center'>
                            <img className='object-contain justify-center items-center' src={require('../../assets/images/p3.png')} alt='react-icon' />
                        </div>
                        <div className='lg:col-span-1 lg:row-span-5 flex flex-col lg:p-2'>
                            <div className=' font-roboto-mono text-xl lg:pt-6'>
                                An eCommerce Figures Community Web Project crafted for enthusiasts passionate about collecting, selling, or discussing figures. We designed, developed, and coded this web application using the MERN stack. My responsibilities included UI design and frontend development.
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-4 font-roboto-mono mt-8 lg:col-span-1'>
                                <a className='shadow-md rounded-lg bg-white p-4 font-semibold hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/disuki/report.pdf')} target="_blank">Report</a>
                                <a className='shadow-md rounded-lg bg-white p-4 font-semibold hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://github.com/G-nap/Daisukifigure" target="_blank">Code</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mb-36 '>
                <div className=''>
                    <div className='font-roboto-mono font-bold text-2xl mr-2 mb-6'>Candy Thief</div>
                    <div className='font-roboto-mono text-xl md:col-span-2 '>
                        In this 2D Adventure game, your mission is to chase down the elusive rabbit that has pilfered Lollytaffy's candy and reclaim it. Navigate through the game world, searching for and collecting keys hidden within the rabbit hole to unlock the bandit rabbit's lair. Prepare for an exciting showdown as you engage in a fight to reclaim Lollytaffy's precious sweets! This game is developed using SFML and C++.
                    </div>
                    <div className='relative flex justify-center items-end mt-8 p-1'>
                        <img className='w-[15%] absolute lg:-bottom-10 lg:-left-10 bottom-0 -left-3' src={require('../../assets/images/Candy_walk.gif')} alt='react-icon' />
                        <img className='w-[70%]' src={require('../../assets/images/p5.png')} alt='react-icon' />
                        <img className='w-[10%] absolute bottom-12 right-0' src={require('../../assets/images/p5-2.png')} alt='react-icon' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 font-roboto-mono mt-10 '>
                        <a className='shadow-md rounded-lg bg-white p-4 font-semibold hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href={require('../../assets/documents/candy/poster.jpg')} target="_blank">Poster</a>
                        <a className='shadow-md rounded-lg bg-white p-4 font-semibold hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://youtu.be/Yqx6YpGHiDs?si=0eNzBMnth-aRz4Ej" target="_blank">YouTube</a>
                        <a className='shadow-md rounded-lg bg-white p-4 font-semibold hover:bg-[#242424] hover:text-white' rel="noopener noreferrer" href="https://github.com/G-nap/CandyThief" target="_blank">Code</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
