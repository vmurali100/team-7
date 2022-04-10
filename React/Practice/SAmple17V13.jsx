import { Component } from "react";

export class Sample17 extends Component{
    ChangeButton(){
        console.log("Button Change")
    }
    render(){
        return(
            <div>
                <button onClick={this.ChangeButton}>Submit</button>
            </div>
        )
    }
}