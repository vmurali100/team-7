import React from 'react'

export default function Person({man,key}) {
  return (
    <div>
        <h1>
            {key}This is {man.name},My age {man.age}, From {man.city} 
        </h1>
    </div>
  )
}
