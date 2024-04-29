import { useEffect, useState } from "react";
import MenuBanner from "./MenuBanner";


const Menu = () => {

  //menu data
  const [menu, setMen] = useState([]);

  //loading menu data
  useEffect(() => {
    const loadingFun = async () => {
      try{
        const response = await fetch('menu.json')
        const data = await response.json();
        console.log(data)
      }catch(error){
        console.log(error.message)
      }
    }
    loadingFun();
  },[])

  return (
    <div>
      {/* menuBanner section start */}
      <MenuBanner></MenuBanner>
      {/* menuBanner section end */}
      
    </div>
  );
};

export default Menu;