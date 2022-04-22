import React from 'react'
import { UserCunsumer } from './UserContext'

export const FourthComponent = (props) => {
  return (
    <div>
        <h3>I'm From Fourth Component</h3>
        <UserCunsumer>
          {(MyName)=>{
            console.log("Received Full Name",MyName)
          }}
        </UserCunsumer>
        {/* <h3>My Name Received Through Props Drill Down : }</h3> */}
    </div>
  )
}
