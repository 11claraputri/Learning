import React, { useEffect, useState } from 'react';


const Mempelai = () => {
    return (
        <div className=''>
            <div className=' mt-40 w-full '>
                <div className="  px-8 py-4 ml-10 grid grid-cols-4  gap-2 lg:grid-cols-4">
                    <div className="col-span-4 w-full h-full">
                    </div>
                    <div className="grid grid-rows-4 text-right p-2 md:pl-4">
                        <h1 className=" text-xl">Ratna<br />Poetri, F</h1>
                        <hr class="h-px w-28 ml-56 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <p className="text-gray-600 sm:text-sm text-xs text-bold">Putri Keempat
                        <br className='text-[#295370]' />Bapak Ratna Poetri<br />& Ibu Ratna Poetri</p>
                    </div>
                    <div className=' w-60 h-60'>
                        <img src='/assets1/01-4.png' />
                    </div>
                    {/* <div className="relative flex justify-center items-center">
                        <p className="text-4xl">
                            &
                        </p>
                    </div> */}
                    <div className='ml-24 relative w-60 h-60'>
                        <img src='/assets1/02-1.png' />
                    </div>
                        <div className="grid grid-rows-4 text-left mr-4 p-2 md:pl-4">
                            <h1 className=" text-xl">Galih<br />Fadillah</h1>
                            <hr class="h-px w-28 mr-56 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <p className="text-gray-600 sm:text-sm text-xs ">Putra Pertama<br />Bapak Galih Poetra<br />& Ibu Galih</p>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Mempelai;