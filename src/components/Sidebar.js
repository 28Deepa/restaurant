import React from 'react'

export const Sidebar = ({restaurantList, displayMenu}) => {
    console.log(restaurantList);
    return (
        <>
            <div className="w3-sidebar w3-bar-block w3-white w3-card" style={{width: "10%"}}>
                    {restaurantList.map((currElem) => {
                        return (
                            <a className="w3-bar-item w3-button w3-hover-yellow" onClick={displayMenu()}>{currElem}</a>
                        );
                    })}    
            </div>
        </>
        )
}
