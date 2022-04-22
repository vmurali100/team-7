import { useState } from "react"
import { UserProvider } from "../Sample1/ContextProps"
import { DrillB } from "./DrillB"

export const DrillA =()=>{
    const[Friend,SetFrind]=useState("Rehaman")
    return(
        <div>
            <UserProvider value={Friend}>
            <DrillB />
            </UserProvider>
            <h1>DrillA</h1>
            
            
        </div>
    )
}