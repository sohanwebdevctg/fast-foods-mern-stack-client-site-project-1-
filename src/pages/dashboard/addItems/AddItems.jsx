import { useForm } from "react-hook-form";


const AddItems = () => {

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className="w-2/3">
      {/* content section start */}
      <div className="w-full">
        {/* form section start */}
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name & price section start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="product name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="enter price"
                  className="input input-bordered"
                  {...register("price")}
                />
              </div>
            </div>
            {/* name & price section end */}
            {/* category & image section start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">category</span>
                </label>
                <select type="text" {...register("category")} className="select select-bordered w-full">
                  <option value="salad">Salad</option>
                  <option value="drinks">Drinks</option>
                  <option value="popular">Popular</option>
                  <option value="dessert">Dessert</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="offered">Offered</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-md w-full"
                  {...register("image")}
                />
              </div>
            </div>
            {/* category & image section end */}
            {/* recipe section start */}
            <div className="grid grid-cols-1 gap-5">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe description</span>
                </label>
                <textarea type="text" placeholder="enter some description" className="textarea textarea-bordered textarea-md w-full" {...register("recipe")} ></textarea>
              </div>
            </div>
            {/* recipe section end */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Item</button>
            </div>
          </form>
        </div>
        {/* form section end */}
      </div>
      {/* content section end */}
    </div>
  );
};

export default AddItems;
