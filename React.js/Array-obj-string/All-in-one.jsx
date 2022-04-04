import { Component } from "react";

export default class Allinone extends Component{
    constructor(){
        super()
        this.state={
            info : "Hii React how are you...!!",

            bike:{
                bikename:"fz",
                color: "black",
                pric: 130000
            },
            fruit : ["banana","grapes","lemon","kiwi"]
        }
    }
    render(){
        let {bike,fruit}= this.state
        return(
            <div>
                <h1>{this.state.info}</h1>

                <ul>
                {Object.values(bike).map((oo,i)=>{
                    console.log(i)
                    return <li key={i}>{oo}</li>
                })}
            </ul>

            <ul>
                {fruit.map((ff,i)=>{
                    return <li key={i}>{ff}</li>
                })}
            </ul>
            </div>
        )
    }
}