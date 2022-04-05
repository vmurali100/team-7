import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message : "My Friends"
      }
    }

    clickHandler(){
        this.setState({
            Message : "Raju,Deena,Sadik and Surya   "
        })
        console.log()
    }
  render() {
    return (
      <div>
          <div>{this.state.Message}</div>
          <button onClick={() => this.clickHandler()}>Click here</button>
      </div>
    )
  }
}

export default EventBind