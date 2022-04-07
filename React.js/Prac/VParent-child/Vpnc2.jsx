import React, { Component } from 'react'

import Vc2 from './Vc2'

 class Vpnc2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            SaiName : 'J sai Kiran'
        }
        this.displayName = this.displayName.bind(this)
    }
    displayName(){
        alert("Hai Dear" + this.state.SaiName)
    }
  render() {
    return (
      <div>
          <Vc2 saiHandler = {this.displayName}/>
      </div>
    )
  }
}

export default Vpnc2