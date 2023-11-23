import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='home-flex-box'>
            <div className='home-flex-item-text'>
                <div className='home-text-p'>WELCOME TO MY PORTFOLIO</div>
                <div className='home-text-h1'>
                    <span style={{ color: '#3435CE' }}>Front-end&nbsp;</span>
                    <span>Developer</span>
                </div>
                <div className='home-text-p'>Hi, I’m Chotika Trakulnuch. New graduate from
                    Computer Engineering, KMITL. A passionate Front-end Developer.</div>
                <div className='home-text-pB'>Tech Stack</div>
                <div className='home-sm-box'>
                    <div className='home-sm-box-item'></div>
                    <div className='home-sm-box-item'></div>
                    <div className='home-sm-box-item'></div>
                    <div className='home-sm-box-item'></div>
                </div>
            </div>
            <div className='home-flex-item-img'>
                <div className='home-img-layout'>
                    <img div className='home-img'/>
                </div>
                <div className='home-sm-box'>
                    <div className='home-sm-box-item'></div>
                    <div className='home-sm-box-item'></div>
                </div>
            </div>
        </div>
    )
}

export default Home
