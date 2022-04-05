import React from 'react'

function EventHandling() {

    function ClickHandler(){
        console.log("Button clicked")
    }
  return (
    <div>
        <button onClick={ClickHandler}>Submit</button>
    </div>
  )
}

export default EventHandling