import React, { Component } from "react";

export class Arrow extends Component{
    constructor(){
        super()
        this.state={

            stringpack : "",
            
            arraypack : [],

            objectpack : {}

        }
    }
    update=()=>{
        let newState={...this.state}
        newState.stringpack="hello good afternoon welcome to Sunline"
        this.setState(newState)
    }

    updated=()=>{
        let newState={...this.state}
        newState.arraypack=["a","b","c","d","e","f"]
        this.setState(newState)
    }

    updataing=()=>{
        let newState={...this.state}
        newState.objectpack={
            fname:"guru",
            lname:"prasad",
            email:"guruprasad@gmail.com"
        }
        this.setState(newState)
    }

    render(){
        return(
            <div>
                <h1>{this.state.stringpack}</h1>
                <button onClick={this.update}>Enter</button>
                <br />

                <h2>{this.state.arraypack}</h2>
                <button onClick={this.updated}>EnterData</button>
                <br />

                <h3>{this.state.objectpack}</h3>
                <button onClick={this.updataing}>Sing in</button>
                <br />
                
            </div>
        );
    }
}