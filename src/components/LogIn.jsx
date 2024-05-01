import login from "../../public/login/logIn.png";

const LogIn = () => {
  return (
    <div className="">
      {/* Login section start */}
      <div className="display flex flex-col md:flex-row justify-center items-center h-screen w-full p-3 md:p-10">
        {/* content section start */}
        <div className="w-full sm:w-3/5 md:w-5/6 lg:w-4/5">
          <div className="card lg:card-side shadow-xl">
            <div className="flex justify-between items-center rounded-3xl">
              {/* image section start */}
              <div className="md:w-1/2 hidden md:block">
                <img src={login} alt="Album" className="w-full h-full rounded-3xl" />
              </div>
              {/* image section end */}
              {/* form section start */}
              <div className="w-full md:w-1/2 card-body">
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold">LogIn Form</h1>
                <form >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-orange-600 text-white hover:bg-black shadow-xl">Login</button>
                  </div>
                </form>
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
