import React, { useEffect, useState } from 'react';
import Pasangan from '../theme/Pasangan';

const CoverSatu = ({ invitation, openInvitation }) => {
    return (
        // <div>
        //     <div className=' flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img1'>
        //         <div className='h-screen w-screen bg-fixed bg-center bg-cover bg-black/30 '>
        //             <div className='relative text-white text-center mt-80'>
        //                 <p className='text-2xl md:text-3xl lg:text-4xl lg:mb-4'>The Wedding</p>
        //                 <h1 className='text-4xl md:text-4xl lg:text-5xl md:mb-6 lg:mb-4'>GALIH & RATNA</h1>
        //                 <p>18.08.2023</p>
        //             </div>
        //             <div className='max-w-lg m-auto'>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>

            <div className=' flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img1'>
                <div className='h-screen w-screen bg-fixed bg-center bg-cover bg-black/30 '>
                    <div className='relative text-white text-center mt-80'>
                        <p className='text-2xl md:text-3xl lg:text-4xl lg:mb-4'>The Wedding</p>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl md:mb-2 lg:mb-2 font-galih 
    font-weight: 100'>Galih & Ratna</h1>
                        <p className='text-lg md:text-xl lg:text-2xl lg:mb-4 font-abc '>1 8 . 0 8 . 2 0 2 3</p>
                    </div>
                </div>
            </div>

            <div class="max-w-lg m-auto">
                <Pasangan />
            </div>

        </div >

    )
}

export default CoverSatu;