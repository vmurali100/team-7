import { Component } from "react";

export default class Sample15 extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h2>Hello {this.props.name}, I am Going to {this.props.place}</h2>
            </div>
        )
    }
}