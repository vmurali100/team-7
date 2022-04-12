import { Component } from 'react';

  export class Hello extends Component {
  constructor(){
      super()
      this.state={
          Obj:"Video Songs"
      }
  }
  changeMessage(){
      this.setState({
        Obj:"Thank u for Subsribing"
      })
  }
    render() {
    return (
      <div>
          <h1>{this.state.Obj}</h1>
          <button onClick={()=>this.changeMessage()}>Subsribing</button>
      </div>
    )
  }
}
