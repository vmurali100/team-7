import React from 'react'

function VLr1() {
    const persons= [
        {
            id:1,
            name:'Sadik',
            age:'25',
            skill:'@** Html,Css **@'
        },
        {
            id : 2,
            name : 'Rehaman',
            age : 24,
            skill : '@** JavaScript **@'
        },

        {
            id : 3,
            name : 'Deena',
            age : 23,
            skill : '@** Reactjs **@'
        }
    ]
    const personList= persons.map(person => <h2>I am  {person.name}. i am {person.age} Years old. I know {person.skill}</h2>)
  return  <div>{personList}</div> 
}

export default VLr1