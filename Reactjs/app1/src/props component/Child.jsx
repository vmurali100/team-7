import { Component } from "react"

export default class Child extends Component{
    constructor(props){
        super()
    }
        render(){
            return <div>
            <h3>Name : {this.props.Name}</h3>
            <h3>Age : {this.props.Age}</h3>
        </div>
        }
}