import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loading from "../components/Loading";


const MainLayout = () => {

  //authProvider
  const {user, loading} = useContext(AuthContext)
  
  return (
    <div className="bg-zinc-100">
      {
        user && loading ? <Loading></Loading> : <div>
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
      }
    </div>

  );
};

export default MainLayout;