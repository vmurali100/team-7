import { Component } from "react";

export class ComMouse extends Component{
    render(){
        const{increment,decrement,money} = this.props
        return (
            <div>
                <button onMouseOver={increment}>increment+</button>
                <button onMouseOver={decrement}>decrement-</button>
                <h1>{money}</h1>

            </div>
        )
    }
}
HocComponents(ComMouse)