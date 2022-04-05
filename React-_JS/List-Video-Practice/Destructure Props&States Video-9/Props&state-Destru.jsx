import React, { Component } from "react";


export class God extends Component{
    constructor(){
        super()
        this.state={
            weeks:{
              one:"Monday",
              two:"Tuesday",
              three:"Wedsnsday",
              four:"Thursday",
              five:"Friday",
              six:"Satrday",
              seven:"Sunday"
            }
        }

    }
    render(){
        let {one,two,three,four,five,six,seven}=this.state

        const {name,age}=this.props
        return(
            <div>
                <p>{one}{name}{age}</p>
                <p>{two}{name}{age}</p>
                <p>{three}{name}{age}</p>
                <p>{four}{name}{age}</p>
                <p>{five}{name}{age}</p>
                <p>{six}{name}{age}</p>
                <p>{seven}{name}{age}</p>
            </div>
        );
    }
}