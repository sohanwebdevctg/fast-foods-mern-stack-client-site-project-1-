import { Link } from "react-router-dom";
import login from "../../public/login/logIn.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const LogIn = () => {
  return (
    <div className="bg-zinc-100">
      {/* Login section start */}
      <div className="display flex flex-col md:flex-row justify-center items-center h-screen w-full p-3 md:p-10">
        {/* content section start */}
        <div className="w-full sm:w-3/5 md:w-5/6 lg:w-4/5 ">
          <div className="card lg:card-side shadow-xl bg-zinc-100 relative">
            {/* back button start */}
            <Link to="/" className="absolute top-5 right-5">
              <button className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white">
                <RxCross2 className="mx-auto items-center" />
              </button>
            </Link>
            {/* back button end */}
            <div className="flex justify-between items-center rounded-3xl">
              {/* image section start */}
              <div className="md:w-1/2 hidden md:block h-full">
                <img
                  src={login}
                  alt="Album"
                  className="w-full h-full rounded-s-3xl"
                />
              </div>
              {/* image section end */}
              {/* form section start */}
              <div className="w-full md:w-1/2 card-body">
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold">
                  LogIn Form
                </h1>
                <form>
                  {/* email section start */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered"
                    />
                  </div>
                  {/* email section end */}
                  {/* password section start */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                    />
                  </div>
                  {/* password section end */}
                  {/* signup link btn start */}
                  <label className="label text-sm sm:text-base md:text-xs lg:text-sm xl:text-base">
                    <p>
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="link link-hover text-orange-600"
                      >
                        SignUp Now
                      </Link>
                    </p>
                  </label>
                  {/* signup link btn end */}
                  {/* submit btn start */}
                  <div className="form-control mt-4">
                    <button className="btn bg-orange-600 text-white hover:bg-black shadow-xl">
                      Login
                    </button>
                  </div>
                  {/* submit btn end */}
                </form>
                {/* social media section start */}
                <ul className="flex justify-center items-center gap-3">
                  <li>
                    <Link to="/">
                      <button className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white">
                        <FaGoogle className="mx-auto items-center" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white">
                        <FaFacebookF className="mx-auto items-center" />
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white">
                        <FaGithub className="mx-auto items-center" />
                      </button>
                    </Link>
                  </li>
                </ul>
                {/* social media section end */}
              </div>
              {/* form section end */}
            </div>
          </div>
        </div>
        {/* content section end */}
      </div>
      {/* Login section end */}
    </div>
  );
};

export default LogIn;
