import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import pizza from '../../public/pizza/pizza1.png'

const Banner = () => {
  return (
    <div className='display bg-red-300'>
      {/* banner content section start */}
      <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-5 py-5 md:py-10'>
        {/* banner image start */}
        <div className='md:w-1/2 h-full'>
          {/* image start */}
          <div className='animationImg'>
            <img src={pizza} className='w-full h-full'></img>
          </div>
          {/* image end */}
        </div>
        {/* banner image end */}
        {/* banner text start */}
        <div className='md:w-1/2 h-full px-5'>
          {/* title start */}
          <h3 className='lg:text-6xl font-bold'><span className='text-orange-600'>Meat, Eat & Enjoy</span><br></br><span>the true taste</span></h3>
          {/* title end */}
          {/* details start */}
          <p className='lg:text-base italic font-normal my-5'>Fast-food products are often highly processed and precooked or frozen and may contain artificial preservatives in addition to high levels of sodium, cholesterol, saturated fats, and refined grains and sugars</p>
          {/* details end */}
          {/* button start */}
          <Link to="/" className=''>
            <button
              className=" bg-orange-600 px-2 py-2 sm:px-3 sm:py-2 md:px-6 md:py-3 rounded-full text-white font-bold flex items-center gap-2 text-xs sm:text-base md:text-sm hover:bg-black duration-500 hover:shadow-lg hover:shadow-orange-200"
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