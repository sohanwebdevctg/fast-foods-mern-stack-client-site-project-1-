import { FaHeart } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const FoodCard = ({data}) => {

  console.log(data)

  return (
    <div className="m-2 shadow-lg rounded-lg">
      {/* card section start */}
      <div className="card w-[100%] glass ">
        <figure>
          <img
            src={data.image}
            alt="car!"
          />
        </figure>
        <div className="card-body bg-zinc-100">
          {/* reviews & price start */}
          <div className="flex justify-between items-center">
            {/* reviews start */}
            <p className="flex items-center gap-1"><span className="text-sm">Rating</span> <div className="rating rating-sm">
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" checked required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-600" required/>
            </div></p>
            {/* reviews end */}
            {/* price start */}
            <p className="xl:text-xl font-bold">${data.price}</p>
            {/* price end */}
          </div>
          {/* reviews & price end */}
          <h2 className="xl:text-base font-bold italic">{data.name}</h2>
          <p className="xl:text-sm">{data.recipe}</p>
          <div className="flex justify-between items-center">
            <button className="bg-orange-600 p-2 rounded-full text-white"><FaHeart></FaHeart></button>
            <button className="xl:px-3 xl:py-2 rounded-md bg-orange-600 text-white xl:text-xs font-bold">Add to Card</button>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
};

export default FoodCard;
