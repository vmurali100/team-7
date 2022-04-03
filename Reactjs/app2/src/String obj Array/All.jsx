import { Component } from "react";

export default class All extends Component{
    constructor(){
        super()
        this.state={
            Inform:"...welcome to class component...",
            Detail:{
                fname:"balaji",
                lname:"ks"        
            },
            Friends:["vijay","ajith","surya","rajini"]
        }
    }
    render(){
        //  (1) object properties with destructure method 
        // (a) let { fname,lname } =this.state.Detail
        //  (b)let{Detail}=this.state
        let{Friends}=this.state
        return <div>
             <h3>{this.state.Inform}</h3>
            {/* (a) <ul>
                <li>{fname}</li>
                <li>{lname}</li>
            </ul>  */}
            {/*(b) <ul>
                {Object.values(Detail).map((val,i)=>{
                    return <li key={i}>{val}</li>
                })}
            </ul> */}
            <ul>
                {Friends.map((frd,i)=>{
                    return <li key={i}>{frd}</li>
                })}
            </ul>
        </div>
    }
}