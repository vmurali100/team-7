import React from 'react'
import { BiggestComp } from './BiggestComp'

export const BiggerComp = (props) => {
    console.log("My Friends Are",props)
  return (
    <div>
        <h3>Bigger Comp</h3>
        <BiggestComp Friends={props.Friends}/>
    </div>

  )
}
