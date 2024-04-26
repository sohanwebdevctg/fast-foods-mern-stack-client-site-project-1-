import pizza from '../../../public/categories/pizza.png'

// categoriesItem data
const categoriesItem = [
  {id: 1, title: 'pizza', price: 20, image : '../../../public/categories/pizzaImg.png'},
  {id: 2, title: 'salads', price: 20, image : '../../../public/categories/saladImg.png'},
  {id: 3, title: 'burger', price: 20, image : '../../../public/categories/burgerImg.png'},
  {id: 4, title: 'drink', price: 20, image : '../../../public/categories/drinkImg.png'},
]


const Categories = () => {

  return (
    <div className='py-10'>
      {/* categories section start */}
      <div className="display">
        {/* content section start */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-14 md:gap-5 py-5 md:py-10">
          {/* category section start */}
          <div className="md:w-1/2 h-full px-5 md:px-0">
            {/* category title section start */}
            <div>
              <h3 className='text-sm sm:text-base md:text-xs lg:text-lg xl:text-xl uppercase text-orange-600'>customer choice</h3>
              <p className='text-xl sm:text-2xl md:text-lg lg:text-4xl xl:text-5xl font-bold'>Menu Categories</p>
            </div>
            {/* category title section end */}
            {/* category item section start */}
            <div className='grid grid-cols-2 gap-2 sm:gap-5 md:gap-2 lg:gap-4 xl:gap-4 mt-4'>
              {
                categoriesItem.map((item, index) => <div key={index}  className='w-full h-full rounded-xl overflow-hidden relative categoryItem'>
                  {/* image start */}
                  <img src={item.image} className='w-full h-full'></img>
                  {/* image end */}
                  {/* content start */}
                  <div className='absolute bg-[rgba(0,0,0,0.5)] z-30 top-0 right-0 left-0 bottom-0 flex items-end justify-start p-3 sm:p-5 md:p-3 xl:p-5'>
                    <div className='z-30'>
                      {/* title start */}
                      <h4 className='text-slate-200 font-bold text-base sm:text-2xl md:text-lg lg:text-2xl xl:text-4xl uppercase'>{item.title}</h4>
                      {/* title end */}
                      {/* price start */}
                      <p className='my-[2px] sm:my-2 md:my-1 lg:my-2 xl:my-2'><span className='text-sm sm:text-xl md:text-sm lg:text-xl xl:text-lg text-gray-200'>form</span> <span className='text-lg sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl text-orange-600 font-bold'>{item.price}$</span></p>
                      {/* price end */}
                      {/* button start */}
                      <button className='text-white bg-orange-600 px-3 py-1 sm:px-6 sm:py-2 md:px-4 md:py-1 lg:px-5 lg:py-2 xl:px-6 xl:py-2 rounded-lg text-xs sm:text-base md:text-xs lg:text-sm xl:text-sm font-bold cursor-pointer'>Order Now</button>
                      {/* button end */}
                    </div>
                  </div>
                  {/* content end */}
                  
                </div>)
              }
            </div>
            {/* category item section end */}
          </div>
          {/* category section end */}
          {/* image section start */}
          <div className="md:w-1/2 h-full">
            <div className='categoriesImg flex justify-center items-center'>
              <img src={pizza} className='w-[80%] h-full'></img>
            </div>
          </div>
          {/* image section end */}
          
        </div>
        {/* content section end */}
      </div>
      {/* categories section end */}
      
    </div>
  );
};

export default Categories;