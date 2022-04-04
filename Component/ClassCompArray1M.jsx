import { Component } from "react";

export default class ClassArray extends Component{
    constructor(){
        super()
        this.state = {
            Friends : ["Sadik","Deena","Raju","Surya","Rehaman"]
        }
    }
    render(){     
        let {Friends} = this.state  
        return <div>
            <ul>
                {Friends.map((Names,i)=>{
                   return <li key={i}>{Names}</li>
                })}
            </ul>
        </div>
    }
}