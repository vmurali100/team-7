import React from 'react'

export default function Vevent1() {
   function ClickHandler(){
      document.write("Clicked Button")
    }
        
    
  return (
    <div>
        <button onClick={ClickHandler}>Click</button>
    </div>
  )
}
