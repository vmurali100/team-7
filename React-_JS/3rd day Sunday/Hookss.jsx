import { useState } from "react"


export default function Encourage() {

    const [GoodCharater, setGoodCharater] = useState("")

    const Changeinged = () => {
        setGoodCharater(" Always iam help for Everyone")
    }
    
    return (
        <div>
            <button onClick={Changeinged}>Change Attitude</button>
            {GoodCharater.length > 0 && <h2>MyCharater : {GoodCharater}</h2>}
        </div>
    )
}
