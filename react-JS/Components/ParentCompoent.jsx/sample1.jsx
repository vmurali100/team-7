import { Component } from 'react';
import { ChildComp } from '../ChildComp.jsx/ChildComp';

export default class ParentComponent extends Component {
  constructor(){
      super()
      this.state={
          message:"i am from chittoor"
      }
  }
  changeMessageInfo=()=>{
     
      this.setState({message:"Iam not come from chittoor "})
  }
    render() {
    return <div>
          <ChildComp msg={this.state.message} ChangeMsg={this.changeMessageInfo}/>
      </div>
    
  }
}
