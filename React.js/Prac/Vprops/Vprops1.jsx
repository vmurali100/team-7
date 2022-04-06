import React from "react";

const Vprops1  = (props) => {
    console.log(props)
    return (
        <h2>Hello {props.name} is Playing {props.gameName}.</h2>
    ) 
}
export default Vprops1