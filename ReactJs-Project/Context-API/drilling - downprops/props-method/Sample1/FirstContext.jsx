import React, { useState } from "react"
import { UserProvider } from "./ContextProps"
import { SecondContext } from "./SecondContext"


export  const FirstContext = () => {
const [Fname, setFname] = useState('Rajubhai')
    return (
        <div>
            <h1>FirstContext</h1>            
            <UserProvider  value={Fname}>
            <SecondContext />
            </UserProvider>
        </div>
    )
}
