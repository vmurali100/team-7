import React from 'react'

export const DrillD = (props) => {
    console.log('received from C ',props)
  return (
    <div>
      <h1>DrillD {props.Friend}</h1>

    </div>
  )
}
