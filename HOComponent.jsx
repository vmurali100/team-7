import React from "react";
import { Component } from "react";
export const HOComponent = (EmptyComponent) =>{
    class NewComponent extends Component{
        constructor(props){
            super(props)
            this.state = {

            }
        }
        handleIncrement = ()=>{
            this.setState({count: this.state.count + 1})
        }
        handleDecrement = ()=>{
            this.setState({count: this.state.count - 1})
        }
        render(){
            return <EmptyComponent count={this.state.count} incrementCount={this.handleIncrement} decrementCount={this.handleDecrement}/>
        }
        
    }
    return(
        <NewComponent/>
    )
}