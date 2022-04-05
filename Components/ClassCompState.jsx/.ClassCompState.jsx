import React, { Component } from 'react'

export default class Zoom extends Component {
    constructor() {
        super()

        this.Room = {
            Msg : "Hello Sir, How Are You Sir... ",
            users: {
                A: "Html",
                B: "Css",
                C: "Javascript",
                D: "ReactJs"
            },
            Students: ["Sadik", "Surya", "Thala deena", "Rehaman", "Raju"]
        }
    }
    render() {
        let { users, Students } = this.Room
        return (<div>
                <h1>{this.Room.Msg}</h1>

                {Object.values(users).map((Man, i) => {
                    return <li key={i}>{Man}</li>
                })}

                <ul>
                    {Students.map((xyz, i) => {
                        return <li key={i}>{xyz}</li>
                    })}
                </ul>
            </div>
    
    )
  }
}
