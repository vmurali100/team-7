import React, { Component } from 'react'

export default class Sam1 extends Component {
    clickhandler(){
        console.log('click the button')
    }
  render() {
    return (
    
           <div>
            <button onClick={this.clickhandler}>Click</button>
        </div>
      
    )
  }
}
