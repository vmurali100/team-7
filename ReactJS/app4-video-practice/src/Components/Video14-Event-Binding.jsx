import { Component } from "react";

export default class BindingEvent extends Component{
    constructor(){
        super()
        this.state={
            message :"Hello From Evennt Binding"
        }
        // this.sayHello = this.sayHello.bind(this)
    }

    // sayHello(){
    //     this.setState({message:"I am Changed inside"})
    // }

    sayHello = ()=>{
        this.setState({message:"I am Changed inside"})

    }
    render(){
        return <div>
            <h2>{this.state.message}</h2>
            <button onClick={this.sayHello}>Click</button>
        </div>
    }

}



// export default class Toggle extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // This binding is necessary to make `this` work in the callback
//     //   this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }