import React from 'react'

 function Good() {
     function ClickHandler(){
         console.log('Button Clicked')
     }
  return (
    <div>
        <button onClick={ClickHandler}>Submit</button>
    </div>
  )
}
export default Good