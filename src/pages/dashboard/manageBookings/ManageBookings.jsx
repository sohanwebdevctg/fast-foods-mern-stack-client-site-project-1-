import useMenu from "../../../hooks/useMenu";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";


const ManageBookings = () => {
  // get menu data
  const [menu, refetch] = useMenu();

  const [axiosSecure] = useAxiosSecure()


  //delete data
  const deleteData = (data) => {
    axiosSecure.delete(`/allFastFoods/${data._id}`)
    .then((data) => {
      if(data.data.deletedCount > 0){
        refetch()
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your data has been deleted",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }


  return (
    <div className="w-2/3">
      {/* menu content section start */}
      <div className="w-full">
        {/* table section start */}
        <table className="table bg-slate-100 shadow-lg">
          {/* head */}
          <thead className="bg-orange-600 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((data, index) => (<tr key={index} className="hover:bg-slate-200">
                <td>{index}</td>
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
                <td>{data.name}</td>
                <td>${data.price}</td>
                <td>
                  <button >
                    <FaRegEdit className="bg-green-600 text-white xl:text-2xl p-[3px] rounded-md"></FaRegEdit>
                  </button>
                </td>
                <td>
                <button onClick={() => deleteData(data)} >
                    <FaTrash className="bg-red-600 text-white xl:text-2xl p-[3px] rounded-md"></FaTrash>
                  </button>
                </td>
              </tr>))
            }

          </tbody>
        </table>
        {/* table section end */}
      </div>
      {/* menu content section end */}
    </div>
  );
};

export default ManageBookings;
