import React, { Component } from "react";

export class Demo extends Component {
    constructor() {
        super()
        this.state = {

            datas: " Hello Welcome to Javascript",

            informations: {
                fruit: "apple",
                food: "biriyani",
                juice: "fruity,Badaham",
                Vehical: "car",
                water: "cool"
            },

            groups: ["Raju Group", "Deena Group", "Rehaman Group", "Balaji Group"]
        }
    }

    changingval = () => {
        let newState = { ...this.state }
        newState.datas = "Welcome to React JS"
        this.setState(newState);
    }
    changingpro = () => {
        let newState = { ...this.state }
        newState.informations = {
            fruit: "Mango",
            food: "rice",
            juice: "Rose milk",
            Vehical: "bike",
            water: "hot"
        }
        this.setState(newState)
    }
    change = () => { 
        let newState={...this.state}
        newState.groups=["MCom Group","BCom Group","Btech Group","BA Group"]
        this.setState(newState)    }

    render() {

        let { fruit, food, juice, Vehical, water } = this.state.informations

        return (
            <div>

                <b>{this.state.datas}</b>
                <button onClick={this.changingval}>Enter</button>

                <br />

                <ol>
                    <li>{fruit}</li>
                    <li>{food}</li>
                    <li>{juice}</li>
                    <li>{Vehical}</li>
                    <li>{water}</li>
                </ol>
                <button onClick={this.changingpro}>Enter</button>

                <br />

                <ul>
                    <li>{this.state.groups}</li>
                </ul>
                <button onClick={this.change}>Enter</button>

            </div>
        )
    }
}