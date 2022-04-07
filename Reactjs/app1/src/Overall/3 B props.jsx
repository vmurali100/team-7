import { Component } from "react";

export default class Child extends Component{
    constructor(props){
        super()
    }
    render(){
        return <>
           <h2>Caption the Gender</h2>
           <ul>
              <li> Male : {this.props.person.Male} </li>
              <li> Female : {this.props.person.Female} </li>
              <li> Shemale : {this.props.person.Shemale} </li>
          </ul>
        </>
    }
}