import React, { useState } from 'react'
import { SecoundComponent } from './SecoundComponent'
import { UserProvider } from './UserContext'

export const FirstComponent = () => {
    const [Name, setName] = useState("Sayed Rehaman")
    return (
        <div>
            <h1>Hello Guys I'm From First Component</h1>
            <UserProvider value={Name}>
                <SecoundComponent />
            </UserProvider>
        </div>
    )
}
