import React from 'react'

export const ThirdContext = (props) => {
    console.log('received data from second')
  return (
    <div>
        <h2>ThirdContext fullname={props.fullname}</h2>


    </div>
  )
}
