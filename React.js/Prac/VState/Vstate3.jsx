import { Component } from "react";

export class Vstate3 extends Component{
    constructor(){
        super()
        this.state= {
            Yes : "Rehaman, Deena, Surya, Raju"
        }
    }
    changYes=()=>{
        this.setState({
            Yes : "Lokesh, Harish, Balaji, Sadik"
        })
    }
    render(){
        return(
            <div>
                <h4>{this.state.Yes}</h4>
                <button onClick={this.changYes}>Enter</button>
            </div>
            
        )
    }
}