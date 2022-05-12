import { Component } from "react";
import HocComponents from "./HocComponents";

export class newClick extends Component{
    render(){
        const{increment,decrement,money} = this.props
        return(
            <div>
                <button onClick={increment}>increment+</button>
                <button onClick={decrement}>decrement-</button>
                <h1>{money}</h1>

            </div>
        )
    }
}
export default HocComponents(newClick)