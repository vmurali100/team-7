import React, { Component } from 'react'

export default class Sample23 extends Component {
    constructor() {
        super()

        this.state = {
            Info : false
        }
    }
    render() {
      let My
      if (this.state.Info){
          My = <div>Payment Complited</div>
      }else{
          My = <div>Payment Incomplited</div>
      }

      return <div>{My}</div>
    }
}
