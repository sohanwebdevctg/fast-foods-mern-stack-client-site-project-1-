import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  
  return (

    <div className="bg-zinc-100">
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* mainLayout section start */}
      <div className="h-[700px] ">
        <Outlet></Outlet>
      </div>
      {/* mainLayout section end */}
      {/* footer section start */}
      <footer>this is footer</footer>
      {/* footer section end */}
    </div>

  );
};

export default MainLayout;