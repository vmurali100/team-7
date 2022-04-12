import React from "react";
 const Student=(props)=>{
    console.log(props)
    return(
        <h1>How Are {props.myname}You{props.urname}</h1>
    )
}

export default Student