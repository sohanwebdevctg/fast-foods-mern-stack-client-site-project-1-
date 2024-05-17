import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from './../context/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FoodCard = ({data}) => {

  //authProvider
  const {user} = useContext(AuthContext)

  // location and navigation
  const location = useLocation();
  const navigate = useNavigate();

  
  // userCartsFoods
  const addCartsFoods = (data) => {

    //check use then add the data in cart
    if(user && user?.email){

      //get user carts details
      const addCarts = {menuId: data._id, category: data.category, name: data.name, price: data.price, quantity : 1, image: data.image, email: user?.email}

      //add the data
      fetch('http://localhost:5000/carts',{
        method: 'POST',
        headers: { 'content-type' : 'application/json'},
        body: JSON.stringify(addCarts)
      })
      .then((res) => res.json())
      .then((data) => {
        //success message
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been added",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

      
    }
    else{
      Swal.fire({
        title: "Your are not Authenticated user",
        text: "Do you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to LogIn"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from : location}})
        }
      });
    }

  }

  return (
    <div className="m-2 md:m-1 lg:m-2 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
            <button className="px-2 py-1 sm:px-2 sm:py-1 md:px-1 md:py-1 lg:px-3 lg:py-2 xl:px-3 xl:py-2 rounded-md bg-orange-600 text-white text-xs sm:text-sm md:text-xs lg:text-sm xl:text-sm font-bold inline-block text-right" onClick={() => {addCartsFoods(data)}}>Add to Card</button>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
};

export default FoodCard;
