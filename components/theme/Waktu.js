import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Waktu = () => {
    return (
        <div class="mb-12">
            <div class="container mx-auto py-20">
                <h2 class=" text-center text-4xl font-abc  mb-8"> Waktu & Tempat</h2>
                <p className='text-center text-[#19376D] text-5xl md:text-4xl lg:text-5xl md:mb-6 lg:mb-8'>Pernikahan</p>
                <div className="mt-10 text-center px-20 ">
                    <span className=" text-xl md:text-2xl lg:text-2xl text-center text-gray-600 font-abc">“Cinta tidak mengenal hambatan. Ia melompati rintangan, melompati pagar, menembus tembok untuk sampai pada tujuannya dengan penuh harapan.”</span>
                </div>
                <div class="flex justify-center mt-10 gap-3">
                    <div class="relative text-center p-2 bg-gray-100 rounded-xl shadow-md " data-aos="fade-up" data-aos-delay="500">
                        <div className="flex justify-center items-center">
                            <img className=" w-32" src="https://invitemu.id/wp-content/uploads/2022/11/Navy-Blue-4a.png" alt="" />
                        </div>
                        <h3 class=" text-sky-900 font-libre text-3xl mt-4">Akad Nikah</h3>
                        <hr class="h-px  my-4  bg-sky-900 border-0 dark:bg-sky-900"></hr>
                        <div className="font-abc"><p>Agustus</p>
                            <p>Minggu 18 2023</p>
                        </div>
                        <hr class="h-px  my-4  bg-sky-900 border-0 dark:bg-sky-900"></hr>
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="w-6" style={{ color: "#295370", }} />
                        </div>
                        <h2 className="font-abc mt-4">Kediaman Mempelai Wanita</h2>
                        <p className="font-abc mt-4">Jl. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor.</p>
                        <div className="flex justify-center">
                            <button className='flex items-center text-center mt-80 md:mt-1 px-5 py-2 md:px-5 md:py-2 text-sm md:text-sm  lg:text-sm  bg-[#19376D] hover:bg-[#446085]   rounded-xl text-white'>
                                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", }} className='w-3' />
                                <span className='px-1.5'>Lokasi</span>
                            </button>
                        </div>
                    </div>
                    <div class="text-center p-2 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="700">
                        <div className="flex justify-center items-center">
                            <img className="w-32" src="https://invitemu.id/wp-content/uploads/2022/11/Navy-Blue-6a.png" alt="" />
                        </div>
                        <h3 class=" text-sky-900 font-libre text-3xl mt-4">Resepsi</h3>
                        <hr class="h-px  my-4  bg-sky-900 border-0 dark:bg-sky-900"></hr>
                        <div className="font-abc"><p>Agustus</p>
                            <p>Minggu 18 2023</p>
                        </div>
                        <hr class="h-px  my-4  bg-sky-900 border-0 dark:bg-sky-900"></hr>
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="w-6" style={{ color: "#295370", }} />
                        </div>
                        <h2 className="font-abc mt-4">Kediaman Mempelai Wanita</h2>
                        <p className="font-abc mt-4">Jl. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor.</p>
                        <div className="flex justify-center">
                            <button className='flex items-center text-center mt-80 md:mt-1 px-5 py-2 md:px-5 md:py-2 text-sm md:text-sm  lg:text-sm  bg-[#19376D] hover:bg-[#446085]   rounded-xl text-white'>
                                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff", }} className='w-3' />
                                <span className='px-1.5'>Lokasi</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Waktu;
