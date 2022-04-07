import React from 'react'

export default function Food() {
  function ClickHandler(){
      console.log('button clicked')
  }
    return (
    <div>
        <button onClick={ClickHandler}>Click</button>
    </div>
  )
}
