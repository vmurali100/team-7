import { Component } from "react"

export default class ChildComp extends Component{
    constructor(props){
        super()
        console.log(props)
    }
    render (){
        return <div>
        <h2>First Name :{this.props.personObj.fname}</h2>
        <h2>Last Name :{this.props.personObj.lname}</h2>
        <h2>Email : {this.props.personObj.email}</h2>
    </div>
    }
}