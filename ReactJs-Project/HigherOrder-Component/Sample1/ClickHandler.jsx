import { Component } from "react";
import {HocComponent} from "./HocComponent";

class ClickHandler extends Component{
   
    render(){
        // console.log("raju", this.props);
        const{Increment,Decrement,count} = this.props
        return <div>
            {/* normal method */}
            {/* <button onClick={this.props.Increment}>Increment</button>
            <button onClick={this.props.Decrement}>Decrement</button> */}


            {/* destructure */}
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <h1>count:{count}</h1>
        </div>
    }
}
export default HocComponent(ClickHandler)