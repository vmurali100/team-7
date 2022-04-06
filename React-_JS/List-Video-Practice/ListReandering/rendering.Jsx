import React from "react"

function ListRendering() {
    const person = [
        {
            color: 'yellow',
            type: 'mango',
            rate: '15rs',
            status: 'teasty'
        },
        {
            color: 'red',
            type: 'apple',
            rate: '40rs',
            status: 'normal sweet'
        }
    ]
   const fruitname=fruit.map(fruit=>  <Surya fruit={fruit}/>  )
    return <div> {fruitname}</div>
}
export default ListRendering