import React from 'react'
import ListRendaring1 from './V17ListRendaring1'

export default function ListRendaring() {
    const Details = [
        {
            Name: "Raju",
            MobileNo: 9566666874,
            Work: "Software",
            salary: "45 k",
            city: "Bangalore",
        },
        {
            Name: "Deena",
            MobileNo: 7854124562,
            Work: "Front End Develepor",
            salary: "50 k",
            city: "Chennai",
        },
        {
            Name: "Rehaman",
            MobileNo: 8885977810,
            Work: "Infosys Manager",
            salary: "65 k",
            city: "Bangalore",
        },
        {
            Name: "Sadik",
            MobileNo: 6300189755,
            Work: "Wipro Employee",
            salary: "45 k",
            city: "Hydrabad",
        }
    ]
    const EmployeeList = Details.map(person => (  <ListRendaring1 person={person}/>      ))
    return <div>{EmployeeList}</div>

}

