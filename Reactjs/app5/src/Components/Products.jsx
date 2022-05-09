import React from "react";
import { useSelector } from "react-redux";

export const Products=()=>{
    const allproducts = useSelector((state)=>state.Products)
    return(
     <div>
        <h2>users component</h2>
     </div>
    )
    }