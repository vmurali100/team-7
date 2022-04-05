import React, { Component } from 'react'

export default class Deena extends Component {
    constructor() {
        super()
        this.state = {
            Car: " ",
            Bike: { },
            Bus: [""]
        }
    }
    NewCar = () => {
        let newState = { ...this.State }
        newState.Car = "2022 new model car"
        this.setState(newState)
    }
    NewBike = () => {
        let newState ={...this.State}
        newState.NewBike={
            fname:"Shekar",
            lname:"Kumar",
            email:"shekar00@gamil.com",
            city:"Chittoor"
        }
        this.setState(newState)
    }
    NewBus=()=>{
        let newState = {...this.State}
       newState.Bus=["Abhi","Balu","Charan","Deena","imran","raju"]
        this.setState(newState)
    }
    render() {
        let { Bike, Bus } = this.State
        return (
            <div>
                <button onClick={this.NewCar}>open</button>
                <h2>{this.State.Car}</h2>

                <hr />
                <button onClick={this.NewBike}>submit</button>
                {Object.values (Bike).map((data)=>{
                    return <li>{data}</li>
                })}

                <hr />
                <button onClick={this.NewBus}>click</button>
                {Bus.map((vale,i)=>{
                    return <li key={i}>{vale}</li>
                })}
            </div>
        )
    }
}
