import { Component } from "react";

export default class Objectnew extends Component{
    constructor(){
        super()
        this.state={
            bike:{
                Bikename: "Bullet",
                Color : "red",
                Speed : 240,
                Model : 2020,
                Price : 200000
            }
        }
    }
    render(){
        let {bike} = this.state
        return <div>
            {Object.values(bike).map((oo)=>{
                return <h5>{oo}</h5>
            })}
        </div>
    }
}