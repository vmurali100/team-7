import React, { Component } from 'react'

export class VcR5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         sentence : true
                    // false 
      }
    }
  render() {
    return this.state.sentence && <div> Dhoni is player </div>
    
  }
}

export default VcR5