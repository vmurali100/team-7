import React from 'react'
import { UserCunsumer } from '../Sample1/ContextProps'

export const DrillD = (props) => {
    console.log('received from C ',props)
  return (
    <div>
      <h1>DrillD {props.Friend}</h1>
      <UserCunsumer>
        {(myname)=>{
          console.log('received from Drill(A)',myname)
        }}
      </UserCunsumer>

    </div>
  )
}
