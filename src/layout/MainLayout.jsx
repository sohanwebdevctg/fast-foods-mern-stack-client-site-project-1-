import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  
  return (

    <div>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* mainLayout section start */}
      <Outlet></Outlet>
      {/* mainLayout section end */}
      {/* footer section start */}
      <footer>this is footer</footer>
      {/* footer section end */}
    </div>

  );
};

export default MainLayout;