import React from 'react'
import {Work} from './BBB'
 function Shop() {
 const person=[
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
 const personList= person.map(Users => <Work Users={Users}/>)
return <div>{personList}</div>
}
export default Shop