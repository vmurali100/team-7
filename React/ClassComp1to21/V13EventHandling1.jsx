import React, { Component } from 'react'

export class ClassClick extends Component {

    ClickHandler(){
        console.log("Click the Bottun")
    }

  render() {
    return (
      <div>
          <button onClick={this.ClickHandler}>Click here</button>
      </div>
    )
  }
}

export default ClassClick