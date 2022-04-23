import React, { useState } from 'react'
import { Two } from './Two'
import { Three } from './Three'
import { Four } from './Four'

export const One = () => { 
    const[A,setA]=useState("Thala Deena")
  return (
    <div>
        <Two B={A}/>

        <Three sun={(good)=>{return "what is your name"+(good)}}/>
        <Three boy={(bad)=>{return <Four sun={boy}/>}}/>
    </div>
  )
}
