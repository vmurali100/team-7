import { Component } from "react";

export class AllComp extends Component{
    constructor(){
        super()
        this.state = {
            Data : "Hello guys this is Rehaman...:)",
            Employee : {
                name : "Raju",
                DOB : "20.10.1998",
                Work : "Software",
                Salary : "35 k",
                city : "Bangalore",
                state : "Karnataka"
            },
            Info : ["Forest","River","Sea","Plant","Mountain"]
        }
    }
    render(){
        let {Employee,Info} = this.state
        return (
            <div>
            <h3>{this.state.Data}</h3>

            {Object.values(Employee).map((ABC)=>{
                return <h4>{ABC}</h4>
            })}

            {Info.map((XYZ,i)=>{
                return <h5 key={i}>{XYZ}</h5>
            })}
        </div>
        )
    }
}