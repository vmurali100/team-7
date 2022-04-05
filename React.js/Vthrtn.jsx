import React from 'react'

function Event() {

    function ClickHandler(){
        // console.log("Button clicked")
        document.write("Button Clicked")
    }
  return (
    <div>
        <button onClick={ClickHandler}>Enter</button>
    </div>
  )
}

export default Event