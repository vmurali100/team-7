import { Component } from "react";

export default class Childunit extends Component{
    constructor(props){
        super()
    }
    render(){
        return <>
           <h2>Caption the Gender</h2>
           <ul>
              <li> Namee : {this.props.Myfrnd.Namee} </li>
              <li> Age : {this.props.Myfrnd.Age} </li>
              <li> City : {this.props.Myfrnd.City} </li>
          </ul>
        </>
    }
}