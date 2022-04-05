import React, { Component } from 'react'

export class EventBind1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "Family"
      }
    }

    clickHandler(){
        this.setState({
            Message : "Father,Mother,Son and Duaghter"
        })
        console.log()
    }
  render() {
    return (
      <div>
          <div>{this.state.Message}</div>
          <button onClick={this.clickHandler.bind(this)}>Click no me</button>
      </div>
    )
  }
}

export default EventBind1