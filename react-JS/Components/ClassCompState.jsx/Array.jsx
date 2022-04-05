import React, { Component } from 'react'

export default class Array extends Component {
    constructor() {
        super()
        // createing An Array 
        this.State = {
            Student: ["Deena", "Raju", "Surya", "Rehaman", "Sadhik"]
        }
    }
    render() {
        let {Student} = this.State
        return <div>
            
            <ul>
                {Student.map((person,i) => {
                    return <li key={i}>{person}</li>
                })}
            </ul>

        </div>
    }
}

