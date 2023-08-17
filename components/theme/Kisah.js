import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Kisah = () => {
    return (
        <div className="  bg-[#040E15]">
            <div className="mt-20 text-center text-white">
                <p className="">Sebuah Kisah</p>
                <h1 className=" lg:text-xl text-3xl text-center">
                    Perjalanan kami
                </h1>
                <span className="text-center">"Aku tidak tahu dimana ujung perjalanan ini, aku tidak bisa menjanjikan apapun. Tapi, selama aku mampu, mimpi-mimpi kita adalah prioritas."</span>
            </div>
            <div className="mt-10 h-screen w-full flex justify-center items-center ">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
                            <h1 className="text-[#437faa] text-xl">Pertama Bertemu</h1>
                            <p className="text-gray-600 sm:text-sm text-xs ">I am timeline item content. Click here to edit this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#437faa] "></div>
                        <div className="absolute w-6 h-6 rounded-full bg-[#295370] z-10">
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} className="w-4 h-4 mx-1 mt-1" />
                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    <div className="col-span-4 w-full h-full"></div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#437faa] "></div>
                        <div className="absolute w-6 h-6 rounded-full bg-[#295370] z-10">
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} className="w-4 h-4 mx-1 mt-1" />
                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
                            <h1 className="text-[#437faa] text-xl">Menjalin Hubungan</h1>
                            <p className="text-gray-600 sm:text-sm text-xs ">I am timeline item content. Click here to edit this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>

                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
                            <h1 className="text-[#437faa] text-xl">Bertunangan</h1>
                            <p className="text-gray-600 sm:text-sm text-xs ">I am timeline item content. Click here to edit this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#437faa] "></div>
                        <div className="absolute w-6 h-6 rounded-full bg-[#295370] z-10">
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} className="w-4 h-4 mx-1 mt-1" />
                        </div>
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    <div className="col-span-4 w-full h-full"></div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-1 bg-[#437faa] "></div>
                        <div className="absolute w-6 h-6 rounded-full bg-[#295370] z-10">
                            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }}  className="w-4 h-4 mx-1 mt-1"/>
                        </div>
                    </div>

                    <div className=" relative pt-2 xs:pl-28  col-span-4 w-full h-full">
                        <div className=" absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-white" aria-hidden="true">
                        </div>
                        <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
                            <h1 className="text-[#437faa] text-xl">Menikah</h1>
                            <p className="text-gray-600 sm:text-sm text-xs ">I am timeline item content. Click here to edit this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    )
}
export default Kisah;