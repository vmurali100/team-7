import React from 'react'
import { DrillD } from './DrillD'

export const DrillC = (props) => {
    console.log('received from B',props)
  return (
    <div>
        <h1>DrillC</h1>
        <DrillD />
    </div>
  )
}
