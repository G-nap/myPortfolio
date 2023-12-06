import React from 'react'

function Contact() {
    return (
        <div className='w-screen'>
            <div className=''>
                <div className='flex justify-around items-center md:p-10 p-4 bg-[#f5f5ff] '>
                    <div className="text-[16px] text-slate-950 font-semibold font-roboto-mono hidden sm:block">  Chotie.Portfolio </div>
                    <div className='font-roboto-mono md:text-xl text-sm md:col-span-2 '> BKK,Thailand </div>
                    <div className='font-roboto-mono md:text-xl text-sm md:col-span-2 '> 089-046-6328 </div>
                    <div className='font-roboto-mono md:text-xl text-sm md:col-span-2 '>chotika.tra@gmail.com </div>
                </div>
                <div className='bg-[#212121] flex justify-center items-center text-[#8E8E8E] p-2'>
                    <div className='font-roboto-mono md:text-xl text-sm md:col-span-2 '>© 2023 Chotie.Portfolio</div>
                </div>

            </div>
        </div>

    )
}

export default Contact
