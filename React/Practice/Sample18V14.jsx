import { Component } from "react";

export class Sample18 extends Component{
    constructor(props){
        super(props)
        this.state = {
            Topic : "Bikes"
        }
    }
    ChangeTopic=()=>{
        this.setState({
            Topic : "Appachi,Yamaha,splender, Rx100,Rayzar, "
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.Topic}</h2>
                <button onClick={this.ChangeTopic}>Click</button>
            </div>
        )
    }
}