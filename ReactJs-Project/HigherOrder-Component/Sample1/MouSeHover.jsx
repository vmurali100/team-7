import { Component } from "react";
import HocComponent from "./HocComponent";

class Hover1 extends Component{
    render(){
        const{Increment,Decrement,count} = this.props
        return <div>
             <button onMouseOver={Increment}>Increment</button>
            <button onMouseOver={Decrement}>Decrement</button>
            <h1>{count}</h1>
        </div>
    }
}
export default HocComponent(Hover1)