import { Component } from "react";

export default class ClassArray extends Component{
    constructor(){
        super()
        this.state = {
            Cars : {
                carName:"Kia",
                model:"Carens",
                price:"10,00,000",
                color:"Red",
                madein:"India"
            }
        }
    }
    render(){     
        let {Cars} = this.state  
        return <div>
            <ul>
                {Object.values(Cars).map((Info,i)=>{
                   return <li key={i}>{Info}</li>
                })}
            </ul>
        </div>
    }
}