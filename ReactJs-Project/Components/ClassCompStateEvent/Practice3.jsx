import React, { Component } from 'react'

export default class Practice3 extends Component {
    constructor() {
        super()
        this.state = {
            Management: "Bcci",
            Players: {
                a1: "ViratKholi",
                a2: "Dhoni",
                a3: "Sachin Tendulkar",
                a4: "Raina",
                a5: "Ishan Kishan",
                a6: "Surya Kumar Yadv",
                a7: "Hardik Pandiay",
                a8: "Rohit Sharma",
                a9: "Gambeer",
                a10: "Yuvaraj Singh",
                a11: "Jedeja"
            },
            Bowlers: ["Jasprit Bumrah", "Aswin", "Chahal", "Sammi"]
        }
    }
    str = () => {
        let newState = { ...this.state }
        newState.Management = "Rajubhai"
        this.setState(newState)
    }
    ShowObj = () => {
        let newState = { ... this.state }
        newState.Players = {
            model1: "Baleno",
            Model2: "Swift",
            model3: "Wagon R",
            model4: "Vtara Brezza",
            model5: "Ertiga"
        }
        this.setState(newState)


    }
    ShowAr = () => {
        let newState = { ...this.state }
        newState.Bowlers = ["Jimmy", "S_crose", "Vitara"]
        this.setState(newState);
    }
    render() {
        let { Players, Bowlers } = this.state
        return (
            <div>
                <button onClick={this.str}>String</button>
                <h1> Indian Cricket Team Management:{this.state.Management}</h1>

                <button onClick={this.ShowObj}>Object</button>
                {Object.values(Players).map((rose, i) => {
                    return <li key={i} >{rose}</li>
                })}

                <hr />
                <button onClick={this.ShowAr}>Arrey</button>
                <ul>
                    {Bowlers.map((Red, i) => {
                        return <li key={i}>{Red}</li>
                    })}
                </ul>
            </div>
        )
    }
}