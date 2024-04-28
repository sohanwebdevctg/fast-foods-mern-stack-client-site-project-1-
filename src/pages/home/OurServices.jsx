import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoFastFoodSharp } from "react-icons/io5";

// ourServicesItem
const ourServicesItem = [
  {id: 1, name: 'Online Order', icon: <FaShoppingCart/>, des: 'Order food from restaurants or groceries' },
  {id: 2, name: 'Gift Cards', icon: <FaGift/>, des: 'Send Gift Cards by email, print-at-home, or mail'},
  {id: 3, name: 'Fast Delivery', icon: <TbTruckDelivery/> , des: 'We are always ready 24/7 to help our Customers'},
  {id: 4, name: 'Catering', icon: <IoFastFoodSharp/>, des: 'Eat green vegetables at least three to four times a week' },
]


const OurServices = () => {
  return (
    <div className='display'>
    {/* ourServices content section start */}
    <div className='flex flex-col md:flex-row items-center justify-between gap-14 md:gap-5 py-5 md:py-10'>
      {/* ourServices text start */}
      <div className='md:w-1/2 h-full px-5 space-y-3'>
        {/* subtitle start */}
      <h3 className="text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600">Our Best Services</h3>
        {/* subtitle end */}
        {/* title start */}
        <h3 className='text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold'><span className='text-orange-600'>We Provide Our</span><br></br><span>Best Services</span></h3>
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
      {/* ourServices text end */}
      {/* ourServices card start */}
      <div className='md:w-1/2 h-full grid grid-cols-2 gap-2 sm:gap-4 md:gap-2 lg:gap-3 xl:gap-5 px-2'>
        {/* cardContent start */}
        {
          ourServicesItem.map((item, index) => <div key={index} className="flex flex-col items-center bg-zinc-100 shadow-lg shadow-zinc-300 p-2 sm:p-3 md:gap-2 lg:p-3 xl:p-5 rounded-md space-y-2 md:space-y-1 lg:space-y-2 hover:border-[1px] hover:border-orange-600 duration-300 h-auto w-auto overflow-hidden">
            {/* icon start */}
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-orange-600">{item.icon}</p>
            {/* icon end */}
            {/* name start */}
            <h4 className="text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-bold">{item.name}</h4>
            {/* name end */}
            {/* description start */}
            <p className="text-xs sm:text-sm md:text-xs lg:text-base xl:text-lg italic text-center">{item.des}</p>
            {/* description end */}
          </div>)
        }
        {/* cardContent end */}
      </div>
      {/* ourServices card end */}
      
    </div>
    {/* ourServices content section end */}
  </div>
  );
};

export default OurServices;