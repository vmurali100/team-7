import React from 'react'
import B from './2-person'
import Person from './B-person'
export default function Dhana() {
 const Users=[
     {
         name:'raju',
         city:'chittoor',
         email:'raju@gamil.com'
     },
     {
         name:'deena',
         city:'chittoor',
         email:'deenav@gamil.com'
     }
 ]
 const A=Users.map(man=><B key=''man={man}/> )
    return   <div>{A}</div>
  
}
