import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'


const Satu = ({ invitation, openInvitation }) => {
    return (
        <div>
            {/* <div className='  h-screen w-screen   bg-fixed bg-center bg-cover custom-img'>
                <div className='h-screen w-screen bg-fixed bg-center bg-cover bg-black/30  z-[2]'>
                    <div className='relative text-white text-center'>
                        <p className='pt-14 md:pt-32 lg:pt-52 md:mb-6 lg:mb-8  text-sm md:textxl lg:text-xl '>The Wedding Celebration of</p>
                        <h1 className='text-4xl md:text-4xl lg:text-5xl md:mb-6 lg:mb-8'>GALIH & RATNA</h1>
                        <span className='pt-14 md:pt-32 lg:pt-52 md:mb-2 lg:mb-6  text-sm md:textxl lg:text-xl'>dear,
                            <br />Nama Tamu
                        </span>
                        <div className='flex justify-center items-center mt-20'>
                            <button className=' flex justify-center items-center mt-80 md:mt-1 px-5 py-2 md:px-5 md:py-2 text-sm md:text-sm lg:px-5 lg:py-2 lg:text-sm  bg-[#19376D] hover:bg-[#446085]   rounded-xl text-white'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='w-3' />
                                <span className='px-1.5'>open invitation</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Satu;