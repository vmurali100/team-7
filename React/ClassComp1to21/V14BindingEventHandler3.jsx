import React, { Component } from 'react'

export class EventBind3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "Cars"
      }
    }

    clickHandler = () => {
        this.setState({
            Message : "Audi,Kia,BMW,Hundai,Suzuki and Ferari"
        })
    }
    
  render() {
    return (
      <div>
          <div>{this.state.Message}</div>
          <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default EventBind3