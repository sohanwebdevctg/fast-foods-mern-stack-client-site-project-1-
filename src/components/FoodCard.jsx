

// eslint-disable-next-line react/prop-types
const FoodCard = ({data}) => {

  console.log(data)

  return (
    <div className="m-2">
      {/* card section start */}
      <div className="card w-[100%] glass shadow-xl">
        <figure>
          <img
            src={data.image}
            alt="car!"
          />
        </figure>
        <div className="card-body bg-zinc-100">
          <h2 className="xl:text-base font-bold">{data.name}</h2>
          <p>{data.recipe}</p>
          <div className="card-actions justify-end">
            <button className="xl:px-3 xl:py-2 rounded-lg bg-orange-600 text-white xl:text-xs font-bold">Add to Card</button>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
};

export default FoodCard;
