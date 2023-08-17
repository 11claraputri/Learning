import React, { useEffect, useState } from 'react';


const Pasangan = () => {
    return (
        <div className=''>
            <div className='grid grid-rows-2 items-center justify-center mt-10  '>
                <div className=' w-16 md:w-24 lg:w-28 ml-16 md:ml-20 lg:ml-20'>
                    <img src="/assets1/Navy-Blue-5a.png" alt="" />
                </div>
                <div className=' w-44 md:w-64 lg:w-38  '>
                    <img src="/assets1/Asset-3@4x-1024x203.png" alt="" />
                </div>
            </div>
            <div className=' text-center'>
                <p className='pt-4 md:pt-10 lg:pt-12  text-xl md:text-3xl lg:text-4xl font-abc' >Pasangan</p>
                <h1 className='text-[#19376D] text-3xl md:text-4xl lg:text-4xl md:mb-6 lg:mb-8'>Mempelai</h1>
                <span class="text-lg text-[#3f3f3f] text-center font-abc">
                    Yth. Bapak/Ibu/Saudara/i, Dengan memohon rahmat dan ridho Allah Subhanahu wa Ta'ala, kami bermaksud mengumumkan acara pernikahan kami:
                </span>
            </div>
            
            
        </div>
    )
}

export default Pasangan;