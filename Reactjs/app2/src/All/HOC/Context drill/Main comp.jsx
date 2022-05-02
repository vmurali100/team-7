import React, { useState } from "react"
import { UserProvider } from "../Context"
export const Maincomponent=()=>{
    const[myname,setmyname]=useState("Balaji Baan")
    return(
        <div>
            <UserProvider value ={myname}>
            <Grandparent />
            </UserProvider>

            
        </div>
    )
}