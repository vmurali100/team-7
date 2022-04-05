import React, { Component } from 'react'

export default class ConditionalRendaring1 extends Component {
    constructor() {
        super()

        this.state = {
            LogedIn: true
        }
    }
    render() {
      let Data
      if (this.state.LogedIn){
          Data = <div>Payment Complited</div>
      }else{
          Data = <div>Payment Incomplited</div>
      }

      return <div>{Data}</div>
    }
}
