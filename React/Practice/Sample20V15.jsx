import { Component } from "react";
import ChangeTopic from "./Sample21V15";

export class Sample20 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         Message:" guys How are you...:)"
      }
      this.ChangeButton = this.ChangeButton.bind(this)
    }
    ChangeButton=()=>{
        alert("Hello"+this.state.Message)
    }
    render(){
        return(
            <div>
                <ChangeTopic ChangeButton={this.ChangeButton}/>
            </div>
        )
    }
}