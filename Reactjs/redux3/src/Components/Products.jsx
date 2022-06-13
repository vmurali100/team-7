import React from "react";
import { useSelector } from "react-redux";

export const products =()=>{
    // to access data from store,we need selectors
    const allproducts = useSelector((state)=>state.products)
    return(
        <div>
            users component
        </div>
    )
}