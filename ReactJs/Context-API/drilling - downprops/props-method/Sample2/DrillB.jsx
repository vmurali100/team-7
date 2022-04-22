import React from 'react'
import { DrillC } from './DrillC'

export const DrillB = (props) => {
    console.log('receved from DrillA',props)
  return (
    <div>
        <h1>DrillB</h1>
        <DrillC/>
    </div>
  )
}
