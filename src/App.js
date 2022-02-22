import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import MenuItems from './constants/menuItems';
import { MenuCurrent } from './components/MenuCurrent';
import { useState } from 'react';

function App() {

  const displayMenuItems = () => {
    console.log("Inside selected Restaurant's menu");

  }

  const displayMenu = (restaurant) => {
    console.log("Inside Sidebar slected restaurant", restaurant);
   setSelectedRestro(restaurant);
  }

  const [menuData, setMenuData] = useState(MenuItems);
  const [selectedRestro, setSelectedRestro] = useState('STARBUCKS');

  const getItems = (restaurant) => {
    console.log("Fetching items");
    const menuList = MenuItems.EATORAMA.map(function (obj) {
      return obj.foodname;
    });

    console.log(menuList);
    setMenuData(menuList);
  };

  return (
    <>
        {/* <Navbar fetchSearchResults={fetchSearchResults}/> */}
        <Sidebar restaurantList={Object.keys(MenuItems)} displayMenu={displayMenu}/>
        <MenuCurrent allData={MenuItems} selectedRestaurant={selectedRestro} />
        {/* <MenuCurrent/> */}
    </>
  );
}

export default App;
