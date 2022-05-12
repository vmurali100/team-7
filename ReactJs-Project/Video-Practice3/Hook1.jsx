import React, { useState } from 'react'

export default function Hook1() {
    const [LoverName, setLoverName] = useState(["Rohini"])


    const HookMhod = () => {
        setLoverName("RohiniRaju")
    }
    return (
        <div>
            <h1>{LoverName}</h1>
            <button onClick={HookMhod}>Hook</button>
        </div>
    )
}
