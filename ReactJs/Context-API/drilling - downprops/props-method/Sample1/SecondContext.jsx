import React from 'react'
import { ThirdContext } from './ThirdContext'

export const SecondContext = (props) => {
    console.log('received from drill down:',props)
  return (
    <div>
        <h1>SecondContext</h1>
        <ThirdContext />
    </div>
  )
}
