import { Component } from "react";

export class Sample8 extends Component{
    render(){
        return(
            <h2>Hii {this.props.name},  Can you go to {this.props.City} ?</h2>
        )
    }
}