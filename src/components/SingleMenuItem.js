import React from 'react'

export const SingleMenuItem = (props) => {
    console.log(props);
    return (
        <>
            <div className="single-item-container">
                {/* SingleMenuItem */}
            </div>
            <div className="card" style={props.outofstock === true ? { backgroundColor: "red" } : { backgroundColor: 'green' }}>
                <div className="container" >
                    <h4><b>{props.foodname}</b></h4>
                </div>
            </div>
            {/* <div classNameName="container">
                <button key={props.foodid} style={props.outofstock === true ? { backgroundColor: "red" } : { backgroundColor: 'green' }}>{`${props.foodname}, ${props.foodid}`}</button>
            </div> */}

        </>

    )
}

// onClick={() => props.changeAvailability(props)} 