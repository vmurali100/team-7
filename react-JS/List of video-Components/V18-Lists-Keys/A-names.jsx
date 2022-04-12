import React from 'react'
import Person from './B-person'
export default function Dhoni() {
    const Students = [
        {
            name: 'Raju',
            age: '21',
            city: 'chittoor',
            email: 'raju@gamil.com'
        },
        {
            name: 'Rehaman',
            age: '21',
            city: 'chittoor',
            email: 'rehaman@gamil.com'
        },
        {
            name: 'Sadhik',
            age: '25',
            city: 'Vijayavada',
            email: 'sadhik@gamil.com'
        }
    ]
    const A=Students.map(man=> <Person key=''man={man}/>)
    return <div>{A}</div>
}
