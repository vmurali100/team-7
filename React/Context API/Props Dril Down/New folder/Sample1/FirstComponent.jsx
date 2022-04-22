import React, { useState } from 'react'
import { SecoundComponent } from './SecoundComponent'

export const FirstComponent = () => {
    const [Name, setName] = useState("Sayed Rehaman")
    return (
        <div>
            <h1>Hello Guys I'm From First Component</h1>
            <SecoundComponent MyName={Name}/>
        </div>
    )
}
