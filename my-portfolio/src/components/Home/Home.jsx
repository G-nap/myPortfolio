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
                    <div className='home-sm-box-item'>
                        <img src={require('../../assets/images/react-icon2.gif')} alt='react-icon' className='home-icon-img' />
                    </div>
                    <div className='home-sm-box-item'>
                        {/* <img src={require('../../assets/images/html-icon.gif')} alt='react-icon' className='home-icon-img' /> */}
                        <img src={require('../../assets/images/logo1.png')} alt='react-icon' className='home-icon-img' />
                    </div>
                    <div className='home-sm-box-item'>
                        <img src={require('../../assets/images/logo2.png')} alt='react-icon' className='home-icon-img' />
                    </div>
                    <div className='home-sm-box-item'>
                        <img src={require('../../assets/images/logo3.png')} alt='react-icon' className='home-icon-img' />
                    </div>
                </div>
            </div>
            <div className='home-flex-item-img'>
                <div className='home-img-layout'>
                    <img src={require('../../assets/images/my_img2.png')} alt='react-icon' className='home-img' />
                </div>
                <div className='home-sm-box'>
                    <div className='home-sm-box-item'>
                        <img src={require('../../assets/images/github-icon.gif')} alt='react-icon' className='home-icon-img' />
                    </div>
                    <div className='home-sm-box-item' style={{ marginRight: '0px' }}>
                        <img src={require('../../assets/images//linkedin-icon.gif')} alt='react-icon' className='home-icon-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
