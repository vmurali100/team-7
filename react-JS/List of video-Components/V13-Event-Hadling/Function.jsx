import React from 'react'

 function FunctionClick() {
     function ClickHandler(){
         console.log('Button Clicked')
     }
  return (
    <div>
        <button onClick={ClickHandler}>Click</button>
    </div>
  )
}
export default FunctionClick