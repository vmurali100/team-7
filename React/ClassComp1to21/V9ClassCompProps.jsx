import React from "react";

const PropsMethod = (props) => {
    console.log(props)
    return (
        <h2>Hello {props.name} is {props.HeroName}.</h2>
    ) 
}
export default PropsMethod