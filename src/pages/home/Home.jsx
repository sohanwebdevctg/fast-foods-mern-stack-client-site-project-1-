import Banner from "../../components/Banner";
import Categories from "./Categories";


const Home = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* categories section start */}
      <Categories></Categories>
      {/* categories section end */}
    </div>
  );
};

export default Home;