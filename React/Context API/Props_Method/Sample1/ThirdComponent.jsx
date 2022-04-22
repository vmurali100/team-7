import React from 'react'
import { FourthComponent } from './FourthComponent'

export const ThirdComponent = (props) => {
    console.log("Props From Secound Component",props)
    return (
        <div>
            <h3>Good Evening To All I'm From Third Component</h3>
            <FourthComponent/>
        </div>
    )
}
