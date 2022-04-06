import { Component } from "react";

export class Vstate2 extends Component{
    constructor(){
        super()
        this.state={
            // Obj :{
            //     fname:"Deena",
            //     lname:"as",
            //     age:"22"
            // } 
            Obj : " Albert Einstein Understands Nature. “Look deep into nature, and then you will understand everything better.” Nature is the simplest form of life there is."
        }
    }
    ChangObj(){
        this.setState({
            // Obj:{
            //     fname:"Hari",
            //     lname:"az",
            //     age:"24"
            // }
            Obj : "Taraji Henson Believes Sadness is Portrayed Differently. “Every human walks around with a certain kind of sadness. ..."
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.Obj}</h3>
                <button onClick={()=>this.ChangObj()}>Submit</button>
            </div>
        )
    }
}