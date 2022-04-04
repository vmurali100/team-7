import { Component } from "react";

export class Chil extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <h2>Employee Name : {this.props.Info.name}</h2>
            <h2>Job : {this.props.Info.job}</h2>
            <h2>Salary : {this.props.Info.salary}</h2>
            <h2>Company : {this.props.Info.company}</h2>
            <h2>Aadhaar no : {this.props.Info.aadhaarnumber}</h2>
            <h2>Address : {this.props.Info.address}</h2>
        </div>
    }
}