import { Component } from "react";

export default class Sample extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0
        }
        }
        handleMouseOver=()=>{
            this.setState({count:this.state.count+1})
        }
        handleMouseOut=()=>{
            this.setState({count:this.state.count-1})
        }
    render(){
        return(<div>
            <button onMouseOver={this.handleMouseOver}>Increment + </button>
            <button onMouseOut={this.handleMouseOut}>Decrement - </button>
           
            <h1>The Count Is : {this.state.count}</h1>
        </div>

        )
    }
}