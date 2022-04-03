import { Component } from "react";

export default class Event extends Component{
    constructor(){
        super()
        this.state={
            Inform:"",
            Detail:{},
            Friends:[]
        }
    }
    showme=()=>{
        let newstate ={...this.state}
        newstate.Inform="How are u all"
        this.setState(newstate)
    }
    render(){
        
        return <div>
            <button onClick={this.showme}>Show Information</button>
        </div>
    }
}