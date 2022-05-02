import { Component } from "react";
import { Hocomponent } from "./Hocomponent";

// export default class Clickcounter extends Component{ 
class Clickcounter extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handleincrement=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    // handledecrement=()=>{
    //     this.setState({count:this.state.count-1})
    // }
    render(){
        const{incrementcount,decrementcount,count}=this.props
        return<>
        {/* <button onClick={this. handleincrement}>Increment +</button>
        <button onClick={this.handledecrement}>Decrement -</button>

        <h2>The count is : {this.state.count}</h2> */}

        <button onClick={incrementcount}>Increment +</button>
        <button onClick={decrementcount}>Decrement -</button>

        <h2>The count is : {count}</h2>
        </>
    }
}
export default Hocomponent(Clickcounter)