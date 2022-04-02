import { Component } from "react";
import { ChildComp } from "./ChildComp";

export class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            message:"I am from Parent Component"
        }
    }

    changeMessageInfo=()=>{
        this.setState({message:"I am being Changed from My Child"})
    }
    render(){
        return <div>
            <ChildComp msg={this.state.message} changeMsg = {this.changeMessageInfo}/>
        </div>
    }
}