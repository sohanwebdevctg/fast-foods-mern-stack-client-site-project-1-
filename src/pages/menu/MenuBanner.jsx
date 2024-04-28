import React from 'react';
import { FaAngleRight, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle, FaLink, FaLocationPin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MenuBanner = () => {
  return (
    <div className='pt-10 menuBanner'>
      {/* menuBanner section start */}
      <div className='display'>
      {/* menuBanner content section start */}
      <div className='flex items-center justify-center py-5 md:py-10 h-full'>
        {/* menuBanner text start */}
        <div className='w-full md:w-2/3 flex flex-col items-center text-center h-full px-5'>
          {/* title start */}
          <h3 className='text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold'><span className='text-orange-600'>Fast Delivery & Easy PickUp</span><br></br><span>Best Food for Your Taste</span></h3>
          {/* title end */}
          {/* details start */}
          <p className='text-sm sm:text-base md:text-sm lg:text-base italic font-normal my-3 md:my-3  lg:my-5'>Fast-food products are often highly processed and precooked or frozen and may contain artificial preservatives in addition to high levels of sodium, cholesterol, saturated fats, and refined grains and sugars</p>
          {/* details end */}
            {/* button start */}
          <div className='flex gap-5 items-center'>
            {/* order start */}
            <Link to="/" className=''>
              <button
                className=" bg-orange-600 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:my-2 lg:px-6 lg:py-3 rounded-full text-white font-bold flex items-center gap-2 text-xs sm:text-base md:text-xs lg:text-sm hover:bg-black duration-500 hover:shadow-lg hover:shadow-orange-200"
              >Order Now <FaAngleRight></FaAngleRight>
              </button>
            </Link>
            {/* order end */}
            <Link to="/" className=''>
              <button
                className=" hover:bg-orange-600 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:my-2 lg:px-6 lg:py-3 rounded-full hover:text-white font-bold flex items-center gap-2 text-xs sm:text-base md:text-xs lg:text-sm duration-500 hover:shadow-lg hover:shadow-orange-200 border-[1px] border-orange-600 text-orange-600"
              >Explore Menu
              </button>
            </Link>
          </div>
          {/* button end */}
          {/* social icon start */}
          <ul className='mt-3 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7  gap-3'>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaFacebookF></FaFacebookF></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaTwitter></FaTwitter></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaLinkedinIn></FaLinkedinIn></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaInstagram></FaInstagram></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaGoogle></FaGoogle></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaLink></FaLink></Link></li>
            <li className='text-lg bg-orange-600 w-7 h-7 rounded-full flex justify-center items-center text-white'><Link to="/"><FaLocationPin></FaLocationPin></Link></li>
          </ul>
          {/* social icon end */}
          
        </div>
        {/* menuBanner text end */}
      </div>
      {/* menuBanner content section end */}
      </div>
      {/* menuBanner section end */}
    </div>
  );
};

export default MenuBanner;