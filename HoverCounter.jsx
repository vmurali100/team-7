import React, { Component } from 'react';
import { HOComponent } from './HOComponent';
class HoverCounter extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         count: 0,
    //     }
    // }
    // handleMouseOver = ()=>{
    //     this.setState({count: this.state.count + 1})
    // }
    // handleMouseOut = ()=>{
    //     this.setState({count: this.state.count - 1})
    // }
    render() {
        return (
            <div>
                {/* <button onMouseOver={this.handleMouseOver}>Increment +</button>
                <button onMouseOut={this.handleMouseOut}>Decrement -</button>
                <h2>The count is {this.state.count}</h2> */}
            </div>
        );
    }
}

export default HOComponent(HoverCounter);