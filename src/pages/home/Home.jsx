import Banner from "../../components/Banner";
import Categories from "./Categories";
import DeliciousFood from "./DeliciousFood";
import OurCustomers from "./OurCustomers";


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
      {/* ourCustomers section start */}
      <OurCustomers></OurCustomers>
      {/* ourCustomers section end */}
    </div>
  );
};

export default Home;