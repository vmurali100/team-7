import React, { useState } from 'react'
import User from './User';
function App() {
    const[myname,setmyname]=useState("")
  return (
    <div className='App'>
        <button onClick={()=>{setmyname("Thala Deena")}}>Change Name</button>
        { <User myname={myname}/> }
        
    </div>
  )
}

export default  App;