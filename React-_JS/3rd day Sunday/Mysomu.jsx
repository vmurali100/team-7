import React,{Component} from "react";

export class Hate extends Component{
    constructor(){
        super()
        this.state={
            messge:"Hello Welcome ...!"
        }
        // this.changehandler=this.changehandler.bind(this)

    }
    changehandler=()=>{
        this.setState({
            messge:"Good Bye ...!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.messge}</h1>
                <button onClick={this.changehandler.bind(this)}>ResetCycle</button>
            </div>
        );
    }
}