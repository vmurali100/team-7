import { Component } from "react";

export class Sample22 extends Component{
    constructor(){
        super()
        this.state = {
            message : false
        }
    }
    render(){
        if(this.state.message){
            return <h1>Welcome to my Lovely DRIK team</h1>
        }else{
            return <h1>Imran,Venkat,Malik,Mohammed and Rehaman</h1>
        }
    }
}