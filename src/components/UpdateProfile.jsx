import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const UpdateProfile = () => {

  //authProvider
  const {updateUserProfile} = useContext(AuthContext)

  //react hook form
  const {register,handleSubmit,formState: { errors }} = useForm()

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/updateProfile";

  const onSubmit = (data) => {
    // user data
    const name = data.name;
    const photo = data.photo;

    console.log(name, photo)

    updateUserProfile(name, photo)
    .then(() => {
      alert('successfully')
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage)
    });

  }


  return (
    <div className="bg-zinc-100">
      {/* Login section start */}
      <div className="display flex flex-col  justify-center items-center h-screen w-full p-3 md:p-10">
        {/* content section start */}
        <div className="w-1/2">
          <div className="card lg:card-side shadow-xl bg-zinc-100 relative">
            {/* back button start */}
            <Link to="/" className="absolute top-5 right-5">
              <button className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white">
                <RxCross2 className="mx-auto items-center" />
              </button>
            </Link>
            {/* back button end */}
            <div className="w-full rounded-3xl">
              {/* form section start */}
              <div className="card-body">
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold">
                  Update Profile
                </h1>
                <form  onSubmit={handleSubmit(onSubmit)}>
                  {/* email section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.name ? <span className="text-sm text-red-600">please provide correct Name</span> : <span className="label-text">Name</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="input input-bordered"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {/* email section end */}
                  {/* password section start */}
                  <div className="form-control">
                    <label className="label">
                    {errors.photo ? <span className="text-sm text-red-600">please provide correct image link</span> : <span className="label-text">Photo</span>}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your photo url"
                      className="input input-bordered"
                      {...register("photo", { required: true })}
                    />
                  </div>
                  {/* password section end */}
                  {/* submit btn start */}
                  <div className="form-control mt-4">
                    <button type="submit" className="btn bg-orange-600 text-white hover:bg-black shadow-xl">
                      update
                    </button>
                  </div>
                  {/* submit btn end */}
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

export default UpdateProfile;