import { Link } from "react-router-dom";
import logo from "../../public/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import Profile from "./Profile";
import useCarts from './../hooks/useCarts';

const Navbar = () => {

  // scrolling state
  const [isScroll, setIsScroll] = useState(false);

  //user info
  const {user} = useContext(AuthContext)

  //user carts
  const [carts] = useCarts()

  //scrolling functionality
  useEffect(() => {
    const scrollFun = () => {
    const scrollActive = window.scrollY;
    if(scrollActive > 0){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
    }

    return  () => {
      window.addEventListener('scroll', scrollFun)
    }

  },[])

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to="/menu">All</Link>
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
    <header className={`${isScroll ? 'fixed top-0 right-0 left-0 w-full transition-all ease-in duration-300 z-50 shadow-md bg-slate-100': ' transition-all ease-in duration-500 fixed w-full left-0 right-0 top-0 bg-slate-100 z-50'}`}>
      <div className="display">
        {/* navbar section start */}
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 "
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
            <ul className="menu menu-horizontal px-1 z-50">
              {/* desktop menu start */}
              {navItems}
              {/* desktop menu end */}
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-2">
            {/* search start */}
            <button className="btn btn-ghost btn-circle hidden md:flex items-center">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* search end */}
            {/* cart start */}
            <Link to="/userData">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hidden  md:flex items-center"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{carts.length || 0}</span>
              </div>
            </div>
            </Link>
            {/* cart end */}
            {/* contact button start */}
            {
              user && user ? <Profile user={user}></Profile> : <Link
              to="/login"
              className=" bg-orange-600 px-2 py-2 sm:px-3 sm:py-2 md:px-6 md:py-3 rounded-full text-white font-bold flex items-center gap-2 text-xs sm:text-base md:text-sm hover:bg-black duration-500 hover:shadow-lg hover:shadow-orange-200"
            >
              <FaUser /> LogIn
            </Link>
            }
            {/* contact button end */}
          </div>
        </div>
        {/* navbar section end */}
      </div>
    </header>
  );
};

export default Navbar;
