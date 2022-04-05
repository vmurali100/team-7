import React from "react";

const Person =(props)=>{
    console.log(props)
    return (
        <h2>welcome to{props.MyName} and {props.YourName}</h2>
    )
}
export default  Person