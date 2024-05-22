import useMenu from "../../../hooks/useMenu";

const ManageBookings = () => {
  // get menu data
  const [menu] = useMenu();

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
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
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
