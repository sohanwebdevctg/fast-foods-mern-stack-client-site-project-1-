import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  //carts item show
  const [carts] = useCarts();

  //authProvider
  const {logOut} = useContext(AuthContext);

  //admin rol
  const [isAdmin] = useAdmin();

  //location
  const navigate = useNavigate()

  //logout Btn
  const logOutBtn = () => {
    logOut()
    .then(() => {
      navigate('/');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You are now logged out",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  return (
    <div>
      {/* dashboardLayout content section start */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* content section start */}
          <Outlet></Outlet>
          {/* content section end */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
              isAdmin === true ? <>
              {/* admin section start */}
            <li>
              <Link to="/">Admin Home</Link>
            </li>
            <li>
              <Link to="addItems">Add Items</Link>
            </li>
            <li>
              <Link to="/">Manage Booking</Link>
            </li>
            <li>
              <Link to="manageBookings">Manage Items</Link>
            </li>
            <li>
              <Link to="users">All Users</Link>
            </li>
            {/* admin section end */}
              </> : <>
              {/* user section start */}
            <li>
              <Link to="/">User Home</Link>
            </li>
            <li>
              <Link to="/">Reservation</Link>
            </li>
            <li>
              <Link to="/">Payment History</Link>
            </li>
            <li className="flex gap-2">
              <Link to="carts">
                My Carts{" "}
                <div className="badge badge-success">+{carts.length || 0}</div>
              </Link>
            </li>
            {/* user section end */}
              </>
            }
            
            
            {/* divider section start */}
            <li>
              <div className="divider"></div>
            </li>
            {/* divider section start */}
            {/* front section start */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            {/* front section start */}
            {/* divider section start */}
            <li>
              <div className="divider"></div>
            </li>
            {/* divider section start */}
            <li><button onClick={logOutBtn}>LogOut</button></li>
          </ul>
        </div>
      </div>
      {/* dashboardLayout content section end */}
    </div>
  );
};

export default DashboardLayout;
