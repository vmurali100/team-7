import { useState } from "react"


export default function Encourage() {

    const [Postive,setPostive] = useState("")

    const Develop = () => {
        Postive(" Always Think Postively.....!")
    }
    
    return (
        <div>
            <button onClick={Develop}></button>
            {Postive.length > 0 && <h2>Postivethinking  : {Postive}</h2>}
        </div>
    )
}