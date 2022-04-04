import { Component } from "react";

export class AllEvent extends Component {
    constructor() {
        super()
        this.state = {
            Data: "Hello guys this is Rehaman...:)",
            Employee: {},
            Info: ["Forest", "River", "Sea", "Plant", "Mountain"]
        }
    }

    Ramu = () => {
        let newState = { ...this.state }
        newState.Data = "Iam in Institute"
        this.setState(newState)
    }

    RRR = () => {
        let newState = { ...this.state }
        newState.Employee = {
            name: "Raju",
            DOB: "20.10.1998",
            Work: "Software",
            Salary: "35 k",
            city: "Bangalore",
            state: "Karnataka"
        }
        this.setState(newState)
    }

    BN = () => {
        let newState = { ...this.state }
        newState.Info = ["Fruits", "Flowers", "Vegetables", "Meat"]
        this.setState(newState)
    }
    render() {
        let { Employee, Info } = this.state
        return (
            <div>
                <button onClick={this.Ramu}>Click here</button>
                <h3>{this.state.Data}</h3>

                <button onClick={this.RRR}>Submit</button>
                {Object.values(Employee).map((ABC) => {
                    return <h4>{ABC}</h4>
                })}

                <button onClick={this.BN}>Get</button>
                {Info.map((XYZ, i) => {
                    return <h5 key={i}>{XYZ}</h5>
                })}
            </div>
        )
    }
}