import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import pizza from '../../public/bannerImg/pizza1.png'
import icon1 from '../../public/bannerImg/icon1.png'
import icon2 from '../../public/bannerImg/icon2.png'
import icon3 from '../../public/bannerImg/icon3.png'

const Banner = () => {
  return (
    <div className='display'>
      {/* banner content section start */}
      <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-14 md:gap-5 py-5 md:py-10'>
        {/* banner image start */}
        <div className='md:w-1/2 h-full'>
          {/* image start */}
          <div className='animationImg relative'>
            <img src={pizza} className='w-full h-full'></img>
            {/* icon1 start */}
            <img src={icon1} className='w-14 h-12 absolute -bottom-2 left-2 sm:bottom-5 sm:left-8 md:bottom-5 md:left-0 lg:bottom-5 lg:left-0 xl:bottom-16 xl:left-7'></img>
            {/* icon1 end */}
            {/* icon2 start */}
            <img src={icon2} className='w-14 h-12 absolute -bottom-11 left-32 sm:-bottom-9 sm:left-32 md:-bottom-10 md:left-20 lg:-bottom-10 lg:left-20 xl:-bottom-2 xl:left-18'></img>
            {/* icon2 end */}
            {/* icon3 start */}
            <img src={icon3} className='w-14 h-12 absolute -bottom-5 left-60 sm:-bottom-12 sm:left-60 md:-bottom-9 md:left-52 lg:-bottom-14 lg:left-52 xl:-bottom-10 xl:left-44 '></img>
            {/* icon3 end */}
          </div>
          {/* image end */}
        </div>
        {/* banner image end */}
        {/* banner text start */}
        <div className='md:w-1/2 h-full px-5'>
          {/* title start */}
          <h3 className='text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold'><span className='text-orange-600'>Meat, Eat & Enjoy</span><br></br><span>the true taste</span></h3>
          {/* title end */}
          {/* details start */}
          <p className='text-sm sm:text-base md:text-sm lg:text-base italic font-normal my-3 md:my-3  lg:my-5'>Fast-food products are often highly processed and precooked or frozen and may contain artificial preservatives in addition to high levels of sodium, cholesterol, saturated fats, and refined grains and sugars</p>
          {/* details end */}
          {/* button start */}
          <Link to="/" className=''>
            <button
              className=" bg-orange-600 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:my-2 lg:px-6 lg:py-3 rounded-full text-white font-bold flex items-center gap-2 text-xs sm:text-base md:text-xs lg:text-sm hover:bg-black duration-500 hover:shadow-lg hover:shadow-orange-200"
            >See More <FaAngleRight></FaAngleRight>
            </button>
          </Link>
          {/* button end */}
        </div>
        {/* banner text end */}
      </div>
      {/* banner content section end */}
    </div>
  );
};

export default Banner;