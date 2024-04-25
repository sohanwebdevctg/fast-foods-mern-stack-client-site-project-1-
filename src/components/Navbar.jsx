import { Link } from "react-router-dom";
import logo from "../../public/logo/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Online Order</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );

  return (
    <div>
      {/* navbar section start */}
      <div className="navbar lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* mobile menu start */}
              {navItems}
              {/* mobile menu end */}
            </ul>
          </div>
          <Link href="/">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* desktop menu start */}
            {navItems}
            {/* desktop menu end */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-orange-500 px-6 py-2 rounded-full text-white font-bold">Button</a>
        </div>
      </div>
      {/* navbar section end */}
    </div>
  );
};

export default Navbar;
