import React, { Component } from 'react'

export default class Vevent3 extends Component {
    ClickHandler(){
        document.write("This is Class Comp")
    }
  render() {
    return (
      <div>
          <button onClick={this.ClickHandler}>Submit</button>
      </div>
    )
  }
}
