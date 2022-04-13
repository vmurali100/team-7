import React, { Component } from "react";
import { HOComponent } from "./HOComponent";

class ClickCounter extends Component {
  render() {
    const {incrementCount,decrementCount,count} = this.props

    return (
      <div>
        <button onClick={incrementCount}>Increment +</button> 
        <button onClick={decrementCount}>Decrement -</button>
        <h2>Count Is :{count}</h2>
      </div>
    );
  }
}

export default HOComponent(ClickCounter);
