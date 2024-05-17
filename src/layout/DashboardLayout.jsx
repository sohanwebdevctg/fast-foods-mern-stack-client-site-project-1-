import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
            <li>
              <Link to="/">User Home</Link>
            </li>
            <li>
              <Link to="/">Reservation</Link>
            </li>
            <li>
              <Link to="/">Payment History</Link>
            </li>
            <li>
              <Link to="carts">My Carts</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* dashboardLayout content section end */}
    </div>
  );
};

export default DashboardLayout;
