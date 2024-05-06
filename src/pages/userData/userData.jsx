import useCarts from "../../hooks/useCarts";
import UserDataBanner from "./UserDataBanner";

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
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              carts.map((data, index) => <tr key={index}>
              <th>{++index}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={data.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span>Name: {data.name}</span><br></br>
                <span>Category: {data.category}</span>
              </td>
              <td>{data.quantity}</td>
              <th>
                <button className="btn btn-xs bg-red-600 text-white hover:bg-red-600">Delete</button>
              </th>
            </tr>)
            }
            {/* row */}
          </tbody>
          {/* foot */}
          <tfoot>
          <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* table section end */}
      {/* userCarts data section end */}
    </div>
  );
};

export default UserData;
