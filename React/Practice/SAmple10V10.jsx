import { Component } from "react";

export default class Sample10 extends Component{
    constructor(){
        super()
        this.state = {
            Info:"My Name is Sayed Rehaman"
        }
    }
    changeInfo(){
        this.setState({
            Info:"I am bigg fan of PSPK"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.Info}</h2>
                <button onClick={() => this.changeInfo()}>Submit</button>
            </div>
        )
    }
}