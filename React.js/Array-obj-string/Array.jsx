import { Component } from "react";

export default class Array extends Component{
    constructor(){
        super()
        this.state={
           fruit : ["fruitname", "color", "taste", "price"]
        }
    }
    render(){
        let {fruit} = this.state
        return <div>
            <ul>
                {fruit.map((aa,i)=>{
                    return <li key={i}>{aa}</li>
                })}
            </ul>
        </div>
    }
}