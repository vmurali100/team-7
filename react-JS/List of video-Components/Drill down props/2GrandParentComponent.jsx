import React from 'react'
import { ParentComponent } from './3ParentComponent'

export const GrandParentComponent = (props) => {
    console.log("Propz From Main Component",props)
  return (
    <div>
        <h2>Hello From GrandParentComponent</h2>
        <ParentComponent info={props.Name}/>
    </div>
  )
}
