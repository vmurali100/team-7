import { Component } from "react";

export default class SAmple9 extends Component{
    constructor(){
        super()
        this.state = {
            Message:"I am Learning React js Course"
        }
    }
    ClickButton(){
        this.setState({
            Message:"We are all One Team"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.Message}</h2>
                <button onClick={()=>this.ClickButton()}>click here</button>
            </div>
        )
    }
}