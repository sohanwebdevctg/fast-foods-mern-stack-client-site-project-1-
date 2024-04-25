import React from 'react';

const Banner = () => {
  return (
    <div className='display'>
      {/* banner content section start */}
      <div className='flex flex-col md:flex-row-reverse items-center justify-between gap-5'>
        {/* banner image start */}
        <div className='md:w-1/2'></div>
        {/* banner image end */}
        {/* banner text start */}
        <div className='md:w-1/2'></div>
        {/* banner text end */}
      </div>
      {/* banner content section end */}
    </div>
  );
};

export default Banner;