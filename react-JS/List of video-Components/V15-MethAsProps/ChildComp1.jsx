import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={ props.Zoom}>Greet parent</button>
    </div>
  )
}
