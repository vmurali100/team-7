import { Component } from "react";

export class ChildComp extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div>
            <button onClick={this.props.changeMsg}>Change Message</button>
            <h2 style={{color:"red"}}>{this.props.msg}</h2>
        </div>
    }
}