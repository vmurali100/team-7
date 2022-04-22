import React from 'react'

export const FourthComponent = (props) => {
  return (
    <div>
        <h3>I'm From Fourth Component</h3>
        <h3>My Name Received Through Props Drill Down : {props.MyName}</h3>
    </div>
  )
}
