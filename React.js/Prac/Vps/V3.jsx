import React from "react";

// const V3 = ({price, fruitName})=>{


const V3 = props =>{
    const {price,fruitName}= props


    return(
        <div>
            <h1>It is {price}  fruirt {fruitName}</h1>
        </div>
    )
}
export default V3 

