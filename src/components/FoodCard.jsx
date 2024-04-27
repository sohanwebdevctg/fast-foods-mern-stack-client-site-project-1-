import { FaHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const FoodCard = ({data}) => {

  console.log(data)

  return (
    <div className="m-2 md:m-1 lg:m-2 shadow-lg rounded-lg">
      {/* card section start */}
      <div className="card w-[100%] glass ">
        {/* image start */}
        <figure>
          <img
            src={data.image}
            alt="car!"
            className="w-full h-full hover:scale-110 transition-all duration-500"
          />
        </figure>
        {/* image end */}
        <div className="card-body  bg-zinc-100">
          {/* reviews & price start */}
          <div className="flex justify-between items-center md:gap-3 lg:gap-0">
            {/* reviews start */}
            <p className="flex items-center gap-1"><span className="text-xs sm:text-base md:text-xs lg:text-base xl:text-base">Rating</span> <div className="rating rating-xs sm:rating-sm md:rating-xs lg:rating-sm xl:rating-sm">
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" checked required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
            </div></p>
            {/* reviews end */}
            {/* price start */}
            <p className="text-sm sm:text-base md:text-sm lg:text-lg xl:text-lg font-bold text-right">${data.price}</p>
            {/* price end */}
          </div>
          {/* reviews & price end */}
          <h2 className="text-base sm:text-lg md:text-sm lg:text-lg xl:text-lg font-bold italic">{data.name}</h2>
          <p className="text-sm sm:text-base md:text-xs lg:text-base xl:text-base">{data.recipe}</p>
          <div className="flex justify-between items-center">
            <button className="bg-orange-600 p-2 rounded-full text-white text-xs sm:text-sm md:text-xs lg:text-base xl:text-lg"><FaHeart></FaHeart></button>
            <button className="px-2 py-1 sm:px-2 sm:py-1 md:px-1 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2 rounded-md bg-orange-600 text-white text-xs sm:text-sm md:text-xs lg:text-sm xl:text-sm font-bold inline-block text-right">Add to Card</button>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
};

export default FoodCard;
