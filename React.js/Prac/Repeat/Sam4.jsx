import React from 'react'

export default function Sam4() {
    const obj = [
        {
            id : 1,
            name :"Bike",
            color :"blue",
            speed :"180"
        },
        {
            id : 1,
            name :"Car",
            color : "red",
            speed :"280"
        }
    ]
    const objlist = obj.map (obj => <h2>Hai my {obj.name} color is {obj.color} and speed is {obj.speed}</h2>)
  return (
    <div>
        {objlist}
    </div>
  )
}
