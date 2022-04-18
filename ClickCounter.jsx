import React, { Component } from 'react';
import { HOComponent } from './HOComponent';

class ClickCounter extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         count: 0,
    //     }
    // }
    // handleIncrement = ()=>{
    //     this.setState({count: this.state.count + 1})
    // }
    // handleDecrement = ()=>{
    //     this.setState({count: this.state.count - 1})
    // }
    render() {
        const {incrementCount, decrementCount, count} = this.props
        return (
            <div>
                <h1>The count is {this.props.count}</h1>
                <button onClick={incrementCount}>Increment +</button>
                <button onClick={decrementCount}>Decrement -</button>
                <h2>The count is {count}</h2>
            </div>
        );
    }
}

export default HOComponent(ClickCounter);