import { Link, useLocation, useNavigate } from "react-router-dom";
import signup from "../../public/signup/signup.png";
import { FaFacebookF, FaGithub, } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Google from "./Google";
import Swal from "sweetalert2";

const SignUp = () => {

  //authProvider
  const { signUp, updateUserProfile } = useContext(AuthContext);

  //react hook form
  const {register,handleSubmit,formState: { errors }} = useForm()

  let navigate = useNavigate();

  const onSubmit = (data) => {
    // user data
    const name = data.name;
    const email = data.email;
    const photo = data.photo;
    const password = data.password;

    //create user
    const userData = {name : name, email: email}

    signUp(email, password)
    .then((result) => {
      const user = result.user;
      //update user profile
      updateUserProfile(name, photo)
      .then(() => {
        //create user data in server
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(userData)
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your are logged in now",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/login');
      }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
    });

    })
    .catch((error) => {
      const errorMessage = error.message;
      if(errorMessage){
        alert(errorMessage)
      }
    });

  }

  


  return (
    <div className="bg-zinc-100">
      {/* signup section start */}
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
                  src={signup}
                  alt="Album"
                  className="w-full h-full rounded-s-3xl"
                />
              </div>
              {/* image section end */}
              {/* form section start */}
              <div className="w-full md:w-1/2 card-body">
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold">
                  SignUp Form
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* name section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.name ? <span className="text-sm text-red-600">please provide correct name</span> : <span className="label-text">Name</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {/* name section end */}
                  {/* email section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.email ? <span className="text-sm text-red-600">please provide correct email</span> : <span className="label-text">Email</span>}
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {/* email section end */}
                  {/* photo section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.photo ? <span className="text-sm text-red-600">please provide your photo</span> : <span className="label-text">Photo</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your photo url"
                      className="input input-bordered"
                      {...register("photo", { required: true })}
                    />
                  </div>
                  {/* photo section end */}
                  {/* password section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.password ? <span className="text-sm text-red-600">please provide correct password</span> : <span className="label-text">Password</span>}
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered"
                      {...register("password", { required: true })}
                    />
                  </div>
                  {/* password section end */}
                  {/* login link btn start */}
                  <label className="label text-sm sm:text-base md:text-xs lg:text-sm xl:text-base">
                    <p>
                      Do you have an account?{" "}
                      <Link
                        to="/login"
                        className="link link-hover text-orange-600"
                      >
                        LogIn Now
                      </Link>
                    </p>
                  </label>
                  {/* login link btn end */}
                  {/* submit btn start */}
                  <div className="form-control mt-4">
                    <button className="btn bg-orange-600 text-white hover:bg-black shadow-xl">
                      SignUp
                    </button>
                  </div>
                  {/* submit btn end */}
                </form>
                {/* social media section start */}
                <ul className="flex justify-center items-center gap-3">
                  <li>
                    <Google></Google>
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
      {/* signup section end */}
    </div>
  );
};

export default SignUp;