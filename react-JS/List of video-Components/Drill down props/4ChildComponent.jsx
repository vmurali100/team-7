import React from 'react'
import { UserrConsumber } from '../Context/UserContext'

export const ChildComponent = (props) => {
  return (
    <div>
        <h2>Hellon From ChildComponent {props.info}</h2>
        <UserrConsumber>
          {(allUsers)=>{
            console.log(allUsers)
              // return <h2>fullname Receieve through this props Context AP Drill Down is :{props.fullname}</h2>
          return <div>
              {allUsers.map((user,i)=>{
              return <p key={i}>{user.email}</p>
            })}
          </div>
          }}
        </UserrConsumber>
    </div>
  )
}
