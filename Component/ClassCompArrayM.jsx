import { Component } from "react";

export default class ArrayMethod extends Component{
    constructor(){
        super()
        this.state = {
           Family : ["Father","Mother","Brother","Sister"]
            }
        }
    render(){     
        let {Family} = this.state  
        return <div>
            <ul>
                {Family.map((Mem,i)=>{
                   return <li key={i}>{Mem}</li>
                })}
            </ul>
        </div>
    }
}