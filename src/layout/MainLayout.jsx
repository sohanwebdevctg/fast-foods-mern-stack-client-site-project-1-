import { Outlet } from "react-router-dom";


const MainLayout = () => {
  
  return (

    <div>
      {/* navbar section start */}
      <nav>this is nav bar</nav>
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