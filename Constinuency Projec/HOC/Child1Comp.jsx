import { Component } from "react";
import {HocComponent} from "./HocComponent";

class ClickHandler extends Component{
   
    render(){       
         
        const{Increment,Decrement,count} = this.props
        return (
            <div>        

            <button onClick={this.props.Increment}>Increment</button>
            <button onClick={this.props.Decrement}>Decrement</button>
         
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <h1>count:{count}</h1>
        </div>
        )
        
    }
}
export default HocComponent(ClickHandler)