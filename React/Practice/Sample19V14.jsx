import { Component } from "react";

export class Sample19 extends Component{
    constructor(props){
        super(props)
        this.state={
            Subjects:"All Subjects"
        }
    }
    ChangeButton=()=>{
        this.setState({
            Subjects:"English,Hindi,Telugu,Accounts"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.Subjects}</h2>
                <button onClick={this.ChangeButton.bind(this)}>Submit</button>
            </div>
        )
    }
}