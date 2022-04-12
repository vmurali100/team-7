import React, { Component } from 'react';

 class Love extends Component {
  clickHandler(){
      console.log('Clicked the button')
  }
    render() {
    return (
      <div>
          <button onclick={this.clickHandler}>Submit </button>
      </div>
    )
  }
}
export default Love