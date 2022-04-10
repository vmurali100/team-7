import { Component } from "react";

export default class Bindiing extends Component{
    constructor(){
        super()
        this.state={
            Tiffen:'Idli'
        }
    }
    Bindiing=()=>{
        this.setState({
            Tiffen:"Pongal"
        })
    }
    render(){
        return <>
        {this.state.Tiffen}
        <button onClick={this.Bindiing}>Click</button>
        </>
    }
}