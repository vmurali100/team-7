import { Component } from "react"

export default class Par2 extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div>
            <h2>Name:{this.props.Persons.Name}</h2>
            <h2>City:{this.props.Persons.City}</h2>
            <h2>Email:{this.props.Persons.Email}</h2>
            <h2>Age:{this.props.Persons.Age}</h2>

        </div>
    }
}