import { Component } from "react";

export default class Event extends Component{
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
    rehaman = ()=>{
        let newstate = {...this.state}
        newstate.info="I am from JavaScript"
        this.setState(newstate)
    }
        sadik = ()=>{
            let newstate = {...this.state}
            newstate.bike={
                bikename:"shine",
                color:"blue",
                model:2021,
                price: 110000
            }
            this.setState(newstate)
        }
        deena = ()=>{
            let newstate = {...this.state}
            newstate.fruit = ["chips","sweet","hot","drinks"]
            this.setState(newstate)
        }
    render(){
        let {bike,fruit}= this.state
        return(
            <div>
                <h1>{this.state.info}</h1>
                <button onClick={this.rehaman}>Enter</button>
                <hr/>

                <ul>
                {Object.values(bike).map((oo,i)=>{
                    console.log(i)
                    return <h3 key={i}>{oo}</h3>
                })}
               <button onClick={this.sadik}>Enter</button>
                <hr/>
            </ul>

            <ul>
                {fruit.map((ff,i)=>{
                    return <h3 key={i}>{ff}</h3>
                })}
                <button onClick={this.deena}>Enter</button>
                <hr/>
            </ul>
            </div>
        )
    }
}