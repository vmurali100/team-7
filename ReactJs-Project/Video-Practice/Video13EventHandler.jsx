import React from 'react'

export default function Video13EventHandler() {
   function ClickButton(){
       console.log('Buttonclick')
   }    

  return (
    <div>
        <button onClick={ClickButton}>Submit</button>
        <h1>Hello Sir Good Evening</h1>
        </div>
  )
}
