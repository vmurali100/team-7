import  { Component } from 'react';

export   class ChildComp extends Component {
 constructor(props){
     super()
 }
    render() {
    return <div>
        <button onClick={this.props.ChangeMsg}>Change Message</button>
        <h2 >{this.props.msg}</h2>
    </div>
      
    
  }
}
