

const LogIn = () => {
  return (
    <div className="">
      {/* Login section start */}
      <div className="display flex flex-col md:flex-row justify-center items-center h-screen w-full">
        {/* content section start */}
        <div className="w-full md:w-2/3 p-5">
          <div className="card lg:card-side shadow-xl">
            <figure >
              <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
                className="hidden md:block"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
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
