import { Component } from "react";

export class Vstate4 extends Component{
    constructor(){
        super()
        this.state = {
            Sadik : "Sunline IT Solutions"
        }
    }
    changSadik(){
        this.setState({
            Sadik : "Html,Css,JavaSrcipt,Reactjs"
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.Sadik}</h3>
                <button onClick={()=> this.changSadik()}>Click</button>
            </div>
        )
    }
}