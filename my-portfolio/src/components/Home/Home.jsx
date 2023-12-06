import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='w-3/4 mt-10 md:w-3/4 lg:w-3/5 xl:w-3/5 2xl:w-3/5'>
            <div className=' '>
                <div className='grid gap-12 md:grid-cols-3 md:grid-rows-4 '>
                    {/* 1 */}

                    <div className='flex text-xl font-roboto-mono md:col-span-2 md:items-end'>WELCOME TO MY PORTFOLIO</div>
                    {/* 2 */}
                    <div className='md:relative flex lg:justify-end xl:justify-end 2xl:justify-end 2xl:mb-36 md:col-span-1 md:row-span-2'>
                        <img  className='md:absolute md:top-16 w-64 2xl:w-72' src={require('../../assets/images/my_img2.png')} alt='react-icon' />
                    </div>
                    {/* 3 */}
                    <div className='flex text-4xl 2xl:text-5xl font-bold md:col-span-2 md:items-center'>
                        <h4 className='font-roboto-mono text-[#3435CE]'>Front-end&nbsp;</h4>
                        <span className='font-roboto-mono'>Developer</span>
                    </div>
                    {/* 4 */}
                    <div className='font-roboto-mono text-xl md:col-span-2'>
                        Hi, I'm Chotika Trakulnuch, a recent Computer Engineering graduate from KMITL. I am a passionate front-end developer
                        who also enjoys creating beautiful and functional designs.
                    </div>
                    {/*  */}
                    <div className='flex md:col-span-1 md:row-span-2 md:items-end md:justify-end'>
                        {/* <div className='flex lg:justify-end xl:justify-end 2xl:justify-end'></div> */}
                        <div className='flex lg:justify-end xl:justify-end 2xl:justify-end gap-16'>
                            <div className='w-20 h-20 hover:bg-[#242424] shadow-md p-2 rounded-xl'>
                                <a rel="noopener noreferrer" href="https://github.com/G-nap" target="_blank">
                                    <img src={require('../../assets/images/github-icon.gif')} alt='react-icon' className='' />
                                </a>
                            </div>
                            <div className='w-20 h-20 hover:bg-[#242424] shadow-md p-2 rounded-xl'>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/chotika-tra/" target="_blank">
                                    <img src={require('../../assets/images//linkedin-icon.gif')} alt='react-icon' className='' />
                                </a>
                            </div>
                        </div>
                    </div>

                   

                    {/*  */}
                    <div className='md:col-span-2'>
                        <div className='mb-4 font-roboto-mono font-bold'>Tech Stack</div>
                        <div className='flex gap-16'>
                            <div className='w-16 h-16'>
                                <img src={require('../../assets/images/react-icon2.gif')} alt='react-icon' className='' />
                            </div>
                            <div className='w-16 h-16'>
                                <img src={require('../../assets/images/logo1.png')} alt='react-icon' className='' />
                            </div>
                            <div className='w-16 h-16'>
                                <img src={require('../../assets/images/logo2.png')} alt='react-icon' className='' />
                            </div>
                            <div className='w-16 h-16'>
                                <img src={require('../../assets/images/logo3.png')} alt='react-icon' className='' />
                            </div>
                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}

export default Home
