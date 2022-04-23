import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UserProvider } from '../Context/UserContext'
import { GrandParentComponent } from './2GrandParentComponent'

export const MainComponent = () => {
   const[Name,setName]= useState("Thala Deena")


   const[allusers,setallUsers]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        console.log(res.data)
        setallUsers(res.data)
      }
    )
  },[])
   return (
    <div>

        <h2>Hello From Mian Component</h2>
        <UserProvider value={allusers}>
          <GrandParentComponent  info={Name}/>
        </UserProvider>

    </div>
  )
}
