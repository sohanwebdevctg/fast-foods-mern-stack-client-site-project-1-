import Banner from "../../components/Banner";
import Categories from "./Categories";
import DeliciousFood from "./DeliciousFood";


const Home = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* categories section start */}
      <Categories></Categories>
      {/* categories section end */}
      {/* delicious section start */}
      <DeliciousFood></DeliciousFood>
      {/* delicious section end */}
    </div>
  );
};

export default Home;