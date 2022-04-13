import { Component } from "react";

export default class Name extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>

                <h1>The Count Is :{this.state.count}</h1>
            </div>
        )
    }
    
    
}

