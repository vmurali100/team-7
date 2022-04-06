import React, { Component } from 'react'

export default class Vevent5 extends Component {
    ClickHandler(){
        document.write('This is final Class Comp')
        
    }
  render() {
    return (
      <div>
          <button onClick={this.ClickHandler}> Enter</button>
      </div>
    )
  }
}
