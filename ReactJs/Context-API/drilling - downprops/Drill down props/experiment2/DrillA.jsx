import { useState } from "react"
import { DrillB } from "./DrillB"

export const DrillA =()=>{
    const[Friend,SetFrind]=useState("Rehaman")
    return(
        <div>
            <h1>DrillA</h1>
            <DrillB FriendName={Friend}/>
        </div>
    )
}