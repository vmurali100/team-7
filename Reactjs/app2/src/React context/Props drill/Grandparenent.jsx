import React from "react"
export const Grandparent=(props)=>{
    console.log("i am from main component",props)
   return(
       <div>
           <Parent/>
       </div>
   )
}