import React from 'react'

export default function Vevent2() {
    function ClickHandler(){
        document.write("THis is inside the button")
    }
  return (
    <div>
        <button onClick={ClickHandler}>Submit</button>
    </div>
  )
}
