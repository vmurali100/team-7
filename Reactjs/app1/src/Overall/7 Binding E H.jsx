import { Component } from "react";

export default class Bindiing extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
    }
    Bindiing=()=>{
        this.setState({
            message:"Goodbye"
        })
    }
    render(){
        return <>
        {this.state.message}
        <button onClick={this.Bindiing}>Click</button>
        </>
    }
}