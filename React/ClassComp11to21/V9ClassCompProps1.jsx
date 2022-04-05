import { Component } from "react";

export default class PropsMethod extends Component{
    render(){
        return  <h2>Welcome {this.props.name} is {this.props.HeroName}.</h2>
    }
}