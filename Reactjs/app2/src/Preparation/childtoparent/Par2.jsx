import { Component } from "react"

export default class par2 extends Component{
    constructor(props){
        super()
    }
        render(){
            return <div>
            <h3>Name : {this.props.person.Name}</h3>
            <h3>Age : {this.props.person .Age}</h3>
        </div>
        }
}