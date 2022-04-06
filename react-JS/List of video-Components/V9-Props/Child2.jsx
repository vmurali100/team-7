import React from "react";
 const User=(props)=>{
    console.log(props)
    return(
        <h1>How Are {props.myname}You{props.yourname}</h1>
    )
}

export default User