import React from 'react'
import { UserrConsumber } from '../Context/UserContext'

export const Child = (props) => {
  return (
    <div>
        <UserrConsumber>
            {(sd)=>{
                <h2>{props.good}</h2>
            }}
        </UserrConsumber>
    </div>
  )
}
