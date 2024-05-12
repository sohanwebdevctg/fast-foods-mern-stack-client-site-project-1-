import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import UserDataBanner from "./UserDataBanner";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { FaPlus, FaMinus } from "react-icons/fa";


const UserData = () => {
  //userCarts data
  const [carts, refetch] = useCarts();
  //authContest
  const {user} = useContext(AuthContext)

  //deleteFun
  const deleteFun = (data) => {
    // delete toasw
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/userCarts/${data._id}`,{
          method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
          refetch()
          if(data.deletedCount){
          Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted",
          icon: "success"
        });
          }
        })
      }
    });
  }

  //incrementQuantity function
  const incrementQuantity = (data) => {
    // fetch quantity data
    fetch(`http://localhost:5000/userCarts/${data._id}`,{
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({quantity: data.quantity + 1})
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.modifiedCount > 0){
        refetch()
        // sweet alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Increase your quantity",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

  // decrementQuantity function
  const decrementQuantity = (data) => {
    if(data.quantity > 1){
    // fetch quantity data
    fetch(`http://localhost:5000/userCarts/${data._id}`,{
      method: 'PUT',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify({quantity: data.quantity - 1})
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.modifiedCount > 0){
        refetch()
        // sweet alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Decrease your quantity",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
    }else{
      // sweet alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sorry, Your quantity is too low",
      });
    }
  }

  // calculate the price and quantity
  const calculatePrice = (data) => {
    return (data.price * data.quantity)
  }

  return (
    <div className="display">
      {/* userDataBanner section start */}
      <UserDataBanner></UserDataBanner>
      {/* userDataBanner section end */}
      {/* userCarts data section start */}
      {/* table section start */}
      <div className="my-12  grid grid-cols-3 gap-5">
        <table className="table shadow-xl col-span-2">
          {/* head */}
          <thead className="bg-orange-600 text-gray-200">
            <tr className="text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              carts.map((data, index) => <tr key={index} className="text-center hover:bg-gray-200">
              <th>{++index}</th>
              <td>

                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
              </td>
              <td>
                <span>Name: {data.name}</span><br></br>
                <span>Category: {data.category}</span>
              </td>
              <td className="flex items-center gap-2">
                {/* increment quantity start */}
                <FaPlus onClick={() => incrementQuantity(data)} className="text-base bg-orange-600 text-white p-1 rounded-md"></FaPlus>
                {/* increment quantity end */}
                {/* quantity start */}
                <p className="xl:text-xl">{data.quantity}</p>
                {/* quantity end */}
                {/* decrement quantity start */}
                <FaMinus onClick={() => decrementQuantity(data)} className="text-base bg-orange-600 text-white p-1 rounded-md"></FaMinus>
                {/* decrement quantity end */}
              </td>
              <td>${calculatePrice(data)}</td>
              <th>
                <MdDelete onClick={() => deleteFun(data)} className="text-3xl bg-red-600 text-white text-center mx-auto p-1 rounded-md"></MdDelete>
              </th>
            </tr>)
            }
            {/* row */}
          </tbody>
        </table>
        <div className="col-span-1">
          <div className=" bg-slate-100 shadow-xl p-5 rounded-lg space-y-1">
            <h1 className="xl:text-xl font-bold">Customer Details</h1>
            <ul>
              <li className="xl:text-sm"><span className="font-bold">Name: </span>{user.displayName}</li>
              <li className="xl:text-sm"><span className="font-bold">Email: </span>{user.email}</li>
              <li className="xl:text-sm"><span className="font-bold">User_Id: </span>{user.uid}</li>
            </ul>
            <h1 className="xl:text-xl font-bold">Shopping Details</h1>
            <ul>
              <li className="xl:text-sm"><span className="font-bold">Total Items:</span> {carts.length}</li>
              <li className="xl:text-sm"><span className="font-bold">Total Price:</span>$0.00</li>
            </ul>
          </div>
        </div>
      </div>
      {/* table section end */}
      {/* userCarts data section end */}
    </div>
  );
};

export default UserData;
