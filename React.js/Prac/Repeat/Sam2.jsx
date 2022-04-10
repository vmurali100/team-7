import React, { Component } from 'react'
import Sam2chld from './Sam2chld'

export default class Sam2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         game : {
             game1:'cricket',
             game2: 'chess'
         }
      }
      this.gamemode = this.gamemode.bind(this)
    }
    gamemode(){
        alert("Hello   " + this.state.game.game1)
        alert("hai "  + this.state.game.game2 )
    }

  render() {
    return (
      <div>
          <Sam2chld gamehandler = {this.gamemode}/>
      </div>
    )
  }
}
