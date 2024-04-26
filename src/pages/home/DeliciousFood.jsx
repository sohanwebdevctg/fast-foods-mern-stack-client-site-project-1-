import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FoodCard from "../../components/FoodCard";

const DeliciousFood = () => {
  // foods state
  const [foods, setFoods] = useState([]);

  //foods data loaded
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((food) => food.category === "popular");
        setFoods(popular);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-10">
      {/* deliciousFood section start */}
      <div className="display overflow-hidden">
        {/* content section start */}
        <div className="py-5 md:py-10 px-5">
          {/* delicious title section start */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600">
              delicious dishes
            </h3>
            <p className="text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold">
              <span>Our Delicious Food</span>
              <br></br>
              <span className="text-orange-600">the true taste</span>
            </p>
          </div>
          {/* delicious title section end */}
          {/* food section start */}
          <div className="mt-5">
            <Slider {...settings} className="overflow-hidden">
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
              <FoodCard></FoodCard>
            </Slider>
          </div>
          {/* food section end */}
        </div>
        {/* content section end */}
      </div>
      {/* deliciousFood section end */}
    </div>
  );
};

export default DeliciousFood;
