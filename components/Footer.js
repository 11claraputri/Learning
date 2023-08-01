import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    
      <div className="container mx-auto my-10">
        <div className='max-w-7xl mx-auto bg-[#f8fafe] px-10 py-10 rounded-3xl items-start justify-center'>
          <div className='grid grid-cols md:grid-cols-3 lg:grid-cols-5 gap-2'>
            <div className='mb-5'>
              <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <img src="/assets/footerlogo.svg" alt="footer lgo" />                                </a>
              </div>
              <p className="text-center lg:text-start text-gray-500 ">20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021</p>

            </div>
            <div className='mb-5 pl-10'>
              <h4 className='pb-4'>Company</h4>
              <ul className='text-gray-500'>
                <li className='pb-4 '><a href="" className="text-center hover:text-blue-500 duration-300">Careers</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Teachers</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Support</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Contact</a></li>
              </ul>
            </div>
            <div className='mb-5 pl-10'>
              <h4 className='pb-4'> Product</h4>
              <ul className='text-gray-500'>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Courses</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Pricing</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Blog</a></li>

              </ul>
            </div>
            <div className='mb-5 pl-10'>
              <h4 className='pb-4'> Legal</h4>
              <ul className='text-gray-500'>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Terms & Conditions</a></li>
                <li className='pb-4'><a href="" className="text-center hover:text-blue-500 duration-300">Privacy policy</a></li>

              </ul>
            </div>
            <div className='mb-5 pl-10'>
              <h4 className='pb-4'>Sosial Media</h4>
              <ul className='flex mb-32 gap-5'>
                <BsFacebook className="text-3xl text-gray-500" />
                <BsTwitter className="text-3xl text-gray-500" />
                <BsInstagram className="text-3xl text-gray-500" />

              </ul>
            </div>

          </div>

        </div>

      </div>
  );
};

export default Footer;