import React from 'react'

function VLr2() {
    const Bikes = [
        {
            id : 1,
            name : "Fz",
            model : 2020,
            speed : 180
        },
        {
            id : 2,
            name : "Bullet",
            model : 2020,
            speed : 240
        },
        {
            id : 1,
            name : "R15",
            model : 2020,
            speed : 220
        }
    ]
    const Bikelist = Bikes.map(Bike => <h2>This {Bike.name} is nice. model {Bike.model}. Speed is {Bike.speed} </h2>)
  return <div>{Bikelist}</div>
   
}

export default VLr2