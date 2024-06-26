import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import pizza2 from "../../../public/ourCustomers/pizza2.png";
import icon1 from "../../../public/ourCustomers/icon1.png";
import icon2 from "../../../public/ourCustomers/icon2.png";
import icon3 from "../../../public/ourCustomers/icon3.png";

const OurCustomers = () => {
  return (
    <div className="display">
      {/* ourCustomers content section start */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-14 md:gap-5 py-5 md:py-10">
        {/* ourCustomer text start */}
        <div className="md:w-1/2 h-full px-5 space-y-3">
          {/* subtitle start */}
          <h3 className="text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600">
            customers choice
            {/* subtitle end */}
          </h3>
          {/* title start */}
          <h3 className="text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold">
            <span>Enjoy Our Healthy</span>
            <br></br>
            <span className="text-orange-600">Delicious Foods</span>
          </h3>
          {/* title end */}
          {/* details start */}
          <p className="text-sm sm:text-base md:text-sm lg:text-base italic font-normal my-3 md:my-3  lg:my-5">
            Fast-food products are often highly processed and precooked or
            frozen and may contain artificial preservatives in addition to high
            levels of sodium, cholesterol, saturated fats, and refined grains
            and sugars
          </p>
          {/* details end */}
          {/* feedback start */}
          <div className="sm:flex flex-col sm:flex-row items-center gap-3">
            {/* item1 start */}
            <div className="bg-zinc-100 shadow-xl p-2 rounded-2xl flex items-center gap-3">
              {/* image start */}
              <div className="w-[35%] h-20">
                <img src={icon1} className="sm:w-[100%] h-full"></img>
              </div>
              <ul className="w-[65%] h-full">
                {/* title start */}
                <li className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base font-medium">Customer FeedBack</li>
                {/* title end */}
                {/* rating start */}
                <li>
                  <div className="rating rating-sm sm:rating-md md:rating-xs lg:rating-sm xl:rating-md">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-500"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      required
                    />
                  </div>
                </li>
                {/* rating end */}
              </ul>
              {/* image end */}
            </div>
            {/* item1 end */}
            {/* item2 start */}
            <div className="mt-3 md:mt-0 bg-zinc-100 shadow-xl p-2 rounded-2xl flex items-center gap-3">
              {/* image start */}
              <div className="w-[35%] h-20">
                <img src={icon2} className="sm:w-[100%] h-full"></img>
              </div>
              <ul className="w-[65%] h-full">
                {/* title start */}
                <li className="text-sm sm:text-base md:text-sm lg:text-base xl:text-base font-medium">Customer FeedBack</li>
                {/* title end */}
                {/* rating start */}
                <li>
                  <div className="rating rating-sm sm:rating-md md:rating-xs lg:rating-sm xl:rating-md">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-600"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-500"
                      required
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-500"
                      required
                    />
                  </div>
                </li>
                {/* rating end */}
              </ul>
              {/* image end */}
            </div>
            {/* item2 end */}
          </div>
          {/* feedback end */}
        </div>
        {/* ourCustomers text end */}
        {/* ourCustomers image start */}
        <div className="md:w-1/2 h-full">
          {/* image start */}
          <div className="animationImg relative">
            <img src={pizza2} className="w-full h-full"></img>
          </div>
          {/* image end */}
        </div>
        {/* ourCustomers image end */}
      </div>
      {/* ourCustomers content section end */}
    </div>
  );
};

export default OurCustomers;
