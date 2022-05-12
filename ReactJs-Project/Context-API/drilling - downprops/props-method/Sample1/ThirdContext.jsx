import React from 'react'
import { UserCunsumer } from './ContextProps'

export const ThirdContext = (props) => {
    console.log('received data from second')
  return (
    <div>
        <h2>ThirdContext</h2>

        <UserCunsumer>
          {(Friend)=>{
            console.log('Adding data From A',Friend)
          }}
        </UserCunsumer>



    </div>
  )
}
