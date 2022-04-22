import React, { useState } from "react"
import { SecondContext } from "./SecondContext"


export  const FirstContext = () => {
const [Fname, setFname] = useState('Rajubhai')
    return (
        <div>
            <h1>FirstContext</h1>
            <SecondContext fullname={Fname}/>
        </div>
    )
}
