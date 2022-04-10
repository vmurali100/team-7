import React, { Component } from 'react'

export default class Sam5 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : false
      }
    }
    
  render() {
    if(this.state.first){
        return <div>Hai....How are you...??</div>

    }else{
       return <div>Bye....I'm going....!!</div>

    }
    return (
      <div>
          <div>Hai....How are you...??</div>
          <div>Bye....I'm going....!!</div>
      </div>
    )
  }
}
