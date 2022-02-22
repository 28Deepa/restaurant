import React from 'react'
import MenuItems from '../constants/menuItems'
import { SingleMenuItem } from './SingleMenuItem'
import { useState } from "react";

export const MenuCurrent = ({ allData, selectedRestaurant }) => {
    console.log(allData);
    console.log(selectedRestaurant);

    React.useEffect(() => {
        getMenuItemsObject()
    });

    const getMenuItemsObject = () => {
        const newListItem = allData[selectedRestaurant]
        setMenuItem(newListItem)
        console.log('List', newListItem)
    };

    const [menuItem, setMenuItem] = useState([]);

    const changeAvailability = (item) => {
        const newMenuList = menuItem.filter(menuItem => item.foodid === menuItem.foodid)
        console.log(newMenuList, 'Hi')
        newMenuList[0].outofstock = !newMenuList[0].outofstock
        setMenuItem([...menuItem, newMenuList[0]])
    }

    const getItemToDisplay = (item) => {
        return <SingleMenuItem foodid={item.foodid}
            foodname={item.foodname}
            servingtime={item.servingtime}
            outofstock={item.foodid}
            changeAvailability={changeAvailability}
        />

    }

    console.log(menuItem);

    //     React.useEffect(() => {
    //         displayMenuItems()
    //     });

    //    const displayMenuItems = (item) => {
    //         return <SingleMenuItem item={item}/>

    return (
        <>
            {/* <div className="container my-3">MenuCurrent</div>
        {MenuItems.length ? MenuItems.map((item) => displayMenuItems(item)) : null} */}

            <div className="container">
                {menuItem.length ? menuItem.map((item) => getItemToDisplay(item)) : null}
            </div>
        </>

    )
}
