import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/logo.svg" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center text-gray-600 lg:justify-between items-center gap-10">
                <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blog</p>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none w-36 lg:w-36 h-10 hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar