import { useEffect, useState } from "react";
import MenuBanner from "./MenuBanner";
import FoodCard from './../../components/FoodCard';


const Menu = () => {

  //menu data
  const [menu, setMenu] = useState([]);

  //loading menu data
  useEffect(() => {
    const loadingFun = async () => {
      try{
        const response = await fetch('menu.json')
        const data = await response.json();
        setMenu(data)
      }catch(error){
        console.log(error.message)
      }
    }
    loadingFun();
  },[])

  return (
    <div className="display">
      {/* menuBanner section start */}
      <MenuBanner></MenuBanner>
      {/* menuBanner section end */}
      
      {/* menu data section start */}
      {/* button start */}
      <div className="flex gap-2">
        
      </div>
      {/* button end */}
      {/* menu content start */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {
          menu.map((data, index) => <FoodCard key={index} data={data}></FoodCard>)
        }
        {/* menu content end */}
      </div>
      {/* menu data section end */}
    </div>
  );
};

export default Menu;