import React from "react"
import Raju from "./Video17ListRenderingB"
function ListRendering() {
    const person = [
        {
            color: 'red',
            type: 'station wagon',
            registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
            capacity: 5
        },
        {
            color: 'red',
            type: 'cabrio',
            registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
            capacity: 2
        }
    ]
   const PersanName=person.map(persons=>  <Raju persons={persons}/>  )
    return <div> {PersanName}</div>
}
export default ListRendering