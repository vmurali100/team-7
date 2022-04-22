import React from 'react'
import { EmployeeCunsumer } from './Employee'

export const BigBiggestComp = (props) => {
  return (
    <div>
      <h3>Big Biggest Comp</h3>
      <EmployeeCunsumer>
        {(Raju) => {
          console.log("Received From Big Comp", Raju)
        }}
      </EmployeeCunsumer>
      {/* <h3>I love My Friends : {props.Friends}</h3> */}
    </div>
  )
}
