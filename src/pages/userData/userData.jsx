import useCarts from "../../hooks/useCarts";
import UserDataBanner from "./UserDataBanner";
import { MdDelete } from "react-icons/md";

const UserData = () => {
  //userCarts data
  const [carts] = useCarts();
  console.log(carts);

  return (
    <div className="display">
      {/* userDataBanner section start */}
      <UserDataBanner></UserDataBanner>
      {/* userDataBanner section end */}
      {/* userCarts data section start */}
      {/* table section start */}
      <div className="my-12 shadow-xl">
        <table className="table">
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
              <td>{data.quantity}</td>
              <td>${data.price}</td>
              <th>
                <MdDelete className="text-3xl bg-red-600 text-white text-center mx-auto p-1 rounded-md"></MdDelete>
              </th>
            </tr>)
            }
            {/* row */}
          </tbody>
        </table>
      </div>
      {/* table section end */}
      {/* userCarts data section end */}
    </div>
  );
};

export default UserData;
