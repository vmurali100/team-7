import React, { Component } from 'react'

export default class Vevent4 extends Component {
    ClickHandler(){
        document.write('How r u Class Comp')
    }
  render() {
    return (
      <div>
          <button onClick={this.ClickHandler}>Submit</button>
      </div>
    )
  }
}
