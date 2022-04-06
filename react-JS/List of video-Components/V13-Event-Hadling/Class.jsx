import React, { Component } from 'react';

 class ClassClick extends Component {
  clickHandler(){
      console.log('Clicked the button')
  }
    render() {
    return (
      <div>
          <button onclick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
export default ClassClick