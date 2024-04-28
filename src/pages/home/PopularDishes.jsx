const popularItem = [
  { id: 1, name: "pizza", image: "../../../public/popular/pizza.png" },
  { id: 1, name: "burger", image: "../../../public/popular/burger.png" },
  { id: 1, name: "cake", image: "../../../public/popular/cake.jpg" },
  { id: 1, name: "chicken", image: "../../../public/popular/chicken.jpg" },
  { id: 1, name: "icecream", image: "../../../public/popular/icecream.png" },
  {
    id: 1,
    name: "potatochips",
    image: "../../../public/popular/potatochips.png",
  },
];

const PopularDishes = () => {
  return (
    <div className="py-10">
      {/* popularDishes content section start */}
      <div className="display">
        {/* popularDishes title section start */}
        <div className="space-y-2 text-center">
          <h3 className="text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600">
            popular dishes
          </h3>
          <p className="text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold">
            <span>Our Popular</span>
            <span className="text-orange-600"> Dishes</span>
          </p>
          <p className='text-sm sm:text-base md:text-sm lg:text-base italic font-normal mt-3 md:mt-3 lg:mt-5'>Fast-food products are often highly processed and precooked or frozen and may contain artificial</p>
          {/* details end */}
        </div>
        {/* popularDishes title section end */}
        {/* popularDishes items section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-3 md:gap-2 lg:gap-3 xl:gap-5 my-10 px-2">
          {popularItem.map((item, index) => (
            <div
              key={index}
              className=" h-[100%] w-[100%] flex flex-col items-center gap-2"
            >
              <div className="h-[140px] w-[140px] sm:h-[170px] sm:w-[170px] md:h-[95px] md:w-[95px] lg:h-[130px] lg:w-[130px] xl:h-[170px] xl:w-[170px] rounded-full overflow-hidden popularItemImg shadow-lg shadow-zinc-500">
                {/* image start */}
                <img
                  src={item.image}
                  className="h-full w-full hover:scale-110 duration-500 transition-all z-10 "
                ></img>
                {/* image end */}
              </div>
              {/* content start */}
              <ul>
                {/* name start */}
                <li className="text-base sm:text-lg md:text-sm lg:text-base xl:text-lg italic font-semibold uppercase text-center">
                  {item.name}
                </li>
                {/* name end */}
                {/* rating start */}
                <li className="text-center">
                  <div className="rating rating-sm sm:rating-sm md:rating-xs lg:rating-sm xl:rating-md">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                    />
                  </div>
                </li>
                {/* rating end */}
              </ul>
              {/* content end */}
            </div>
          ))}
        </div>

        {/* popularDishes items section end */}
      </div>
      {/* popularDishes content section end */}
    </div>
  );
};

export default PopularDishes;
