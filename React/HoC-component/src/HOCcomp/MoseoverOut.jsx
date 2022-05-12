import { Component } from "react";
import Hoc from "./Hoc";

class MouseoverOut extends Component{
    render(){
        const{increment,decrement,count}=this.props

        return <div>
            <button type="button" onMouseOver={increment}>increment</button>
            <button type="button" onMouseOver={decrement}>decrement</button>
            <h1>{count}</h1>


        </div>
    }
}
export default Hoc(MouseoverOut)