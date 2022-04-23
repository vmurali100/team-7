import React from 'react'
import { ChildComponent } from './4ChildComponent'

export const ParentComponent = (props) => {
  return (
    <div>
       <ChildComponent info={props.info} />
    </div>
  )
}
