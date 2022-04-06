import React from 'react'

export default function ListRendaring1({person} ){
    return (
        <div>
            <h2>
                I am {person.Name}. My phone no :{person.MobileNo}. I am Working in {person.Work}.My Salary was {person.salary}. In {person.city}.
            </h2>
        </div>
    )
}
