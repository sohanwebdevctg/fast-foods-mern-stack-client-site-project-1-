import { useForm } from "react-hook-form";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";


const AddItems = () => {

  // react hook form
  const { register, handleSubmit } = useForm()

  //axios secure
  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {

    //get form data
    const name = data.name;
    const price = data.price;
    const category = data.category;
    const recipe = data.recipe;
    
    //get image
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)

    //get imageBB link
    const imageBB_link = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB}`


    //fetch imageBB
    fetch(imageBB_link,{
      method: 'POST',
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      //get image url
      const imageUrl = data.data.display_url;

      //post item in data base
      axiosSecure.post('/allFastFoods',{
        name: name, price: price, category: category, image: imageUrl, recipe: recipe
      })
      .then((data) => {
        if(data.data.insertedId){
          // success swal
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    })

  }

  return (
    <div className="w-2/3">
      {/* content section start */}
      <div className="w-full">
        {/* form section start */}
        <div className="card shrink-0 w-full shadow-2xl bg-slate-100">
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
              <button className="btn bg-orange-600 hover:bg-orange-600 text-white">Add Item</button>
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
