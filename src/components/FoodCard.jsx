const FoodCard = () => {
  return (
    <div>
      {/* card section start */}
      <div className="card w-auto glass shadow-lg m-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      {/* card section end */}
    </div>
  );
};

export default FoodCard;
