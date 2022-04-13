import React, { Component } from 'react'

export default class MouseOverCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
           count:0
        }
    }
    // handleMouseOver =()=>{
    //     this.setState({count:this.state.count+1})
    // }
    // handleMouseOut=()=>{
    //     this.setState({count:this.state.count-1})
    // }

    render() {
        return (
            <div>
                <button onMouseOver={this.handleMouseOver}>Increasing +</button>

                <button onMouseOut={this.handleMouseOut}>Drecresing -</button>       

                <h1>MouseHoverCounting : {this.state.count}</h1>

            </div>
        )
    }
}
