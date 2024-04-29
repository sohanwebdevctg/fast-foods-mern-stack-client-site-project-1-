import { useEffect, useState } from "react";
import MenuBanner from "./MenuBanner";
import FoodCard from "./../../components/FoodCard";

const Menu = () => {
  //menu data
  const [menu, setMenu] = useState([]);
  // filter data
  const [filter, setFilter] = useState([]);
  // button data
  const [buttonData, setButtonData] = useState([]);

  //loading menu data
  useEffect(() => {
    const loadingFun = async () => {
      try {
        const response = await fetch("menu.json");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadingFun();
  }, []);

  // filter function button
  const filterData = (value) => {
    const filterBtn = menu.filter((item, index) => item.category === value);
    setFilter(filterBtn);
  };

  // create button
  useEffect(() => {
    const uniqueElements = new Set();
    const duplicates = [];

    menu.forEach((item) => {
      if (uniqueElements.has(item.category)) {
        duplicates.push(item.category);
      } else {
        uniqueElements.add(item.category);
      }
    });

    setButtonData([...uniqueElements]);
  }, [menu]);

  //sorting function data
  const sortFun = (event) => {
    const value = event.target.value;

    let sortedData = [...filter];
    
    switch (value) {
      case "a-z":
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
          break;
      case "z-a":
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
          break;
      case "high-to-low":
          sortedData.sort((a, b) => b.price - a.price);
          break;
      case "low-to-high":
          sortedData.sort((a, b) => a.price - b.price);
          break;
      default:
          break;
  }
  setFilter(sortedData); 
  }

  return (
    <div className="display">
      {/* menuBanner section start */}
      <MenuBanner></MenuBanner>
      {/* menuBanner section end */}

      {/* menu data section start */}
      {/* button and sorting data start */}
      <div className="flex flex-col md:flex-row justify-between items-center px-2">
      {/* button start */}
      <div className="flex gap-2 my-4 overflow-x-scroll items-center">
        {/* all data btn start */}
        <button
          className="bg-orange-600 text-white p-2 rounded-lg uppercase text-sm"
          onClick={() => setFilter([])}
        >
          All
        </button>
        {/* all data btn end */}
        {/* dynamic data btn start */}
        <div className="flex items-center gap-3">
          {buttonData.map((item, index) => (
            <button
              key={index}
              className="bg-orange-600 text-white p-2 rounded-lg flex uppercase text-xs text-center mx-auto"
              onClick={() => filterData(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* dynamic data btn end */}
      </div>
      {/* button end */}
      {/* sorting data start */}
      <select onClick={sortFun} className="select select-bordered select-sm w-full md:w-36">
        <option disabled >All Data</option>
        <option value="a-z" >A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="high-to-low">High-to-Log</option>
        <option value="low-to-high">Low-to-High</option>
      </select>
      {/* sorting data end */}
      </div>
      {/* button and sorting data end */}
      {/* menu content start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {(filter.length > 0 ? filter : menu).map((data, index) => (
          <FoodCard key={index} data={data}></FoodCard>
        ))}
        {/* menu content end */}
      </div>
      {/* menu data section end */}
    </div>
  );
};

export default Menu;
