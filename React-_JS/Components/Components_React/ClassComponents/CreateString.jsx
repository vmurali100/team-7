import { Component } from "react";

export class Demo extends Component{
    constructor(){
        super()
        this.state={
            Info:"This is Surya Sp From Sunline IT Instustions ,In a Chittoor Branch.Iam UI deloveloper in So On Comapany"
        }
    }

    render(){        
        return(
            <div>
                <h1>{this.state.Info}</h1>
            </div>
        )
    }
}