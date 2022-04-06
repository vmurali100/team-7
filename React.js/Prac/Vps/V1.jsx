import React from "react";

// const Hai = ({name, gameName})=>{


const Hai = props =>{
    const {name,gameName}= props


    return(
        <div>
            <h1>Hello {name} for {gameName}</h1>
        </div>
    )
}
export default Hai 

