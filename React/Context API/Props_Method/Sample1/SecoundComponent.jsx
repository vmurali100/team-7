import React from 'react'
import { ThirdComponent } from './ThirdComponent'

export const SecoundComponent = (props) => {
    console.log("Props From First Component",props)
    return (
        <div>
            <h2>Hii Friends I'm From Secound Component</h2>
            <ThirdComponent />
        </div>
    )
}
