import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button onClick={props.greethandler}>greet parent</button>
    </div>
  )
}
