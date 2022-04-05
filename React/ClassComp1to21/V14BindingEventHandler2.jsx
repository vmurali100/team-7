import React, { Component } from 'react'

export class EventBind2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "Fruits"
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            Message : "Apple,Banana,Grape,Orange and Watermelom"
        })
        console.log()
    }
  render() {
    return (
      <div>
          <div>{this.state.Message}</div>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind2