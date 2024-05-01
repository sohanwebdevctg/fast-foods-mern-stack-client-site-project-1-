import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
  
  return (

    <div className="bg-zinc-100">
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* mainLayout section start */}
      <div className="md:min-h-[700px] pt-16 ">
        <Outlet></Outlet>
      </div>
      {/* mainLayout section end */}
      {/* footer section start */}
      <Footer></Footer>
      {/* footer section end */}
    </div>

  );
};

export default MainLayout;