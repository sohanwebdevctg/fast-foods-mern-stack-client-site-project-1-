import { useState } from "react";
import { useEffect } from "react";


const DeliciousFood = () => {

  // foods state 
  const [foods, setFoods] = useState([])

  //foods data loaded
  useEffect(() => {
    fetch('menu.json')
    .then((res) => res.json())
    .then((data) => {
      const popular = data.filter((food) => food.category === 'popular')
      setFoods(popular)
    })
  },[])


  return (

    <div className="py-10">
      {/* deliciousFood section start */}
      <div className="display">
        {/* content section start */}
        <div className="py-5 md:py-10">
          {/* delicious title section start */}
          <div className="space-y-2">
              <h3 className='text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600'>delicious dishes</h3>
              <p className='text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold'><span >Our Delicious Food</span><br></br><span className='text-orange-600'>the true taste</span></p>
            </div>
            {/* delicious title section end */}
            {/* food section start */}
            
            {/* food section end */}
        </div>
        {/* content section end */}
      </div>
      {/* deliciousFood section end */}
    </div>
  );
};

export default DeliciousFood;