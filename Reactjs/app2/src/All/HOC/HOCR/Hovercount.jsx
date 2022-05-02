import { Component } from "react";
import { Hocomponent } from "./Hocomponent";

// export default class Hovercounter extends Component{
class Hovercounter extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handlemouseover=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    // handlemouseout=()=>{
    //     this.setState({count:this.state.count-1})
    // }
    render(){
        const{incrementcount,decrementcount,count}=this.props
        return<>
        {/* <button onMouseOver={this.handlemouseover}>Increment +</button>
        <button onMouseOut={this.handlemouseout}>Decrement -</button>

        <h2>The count is : {this.state.count}</h2> */}

        <button onMouseOver={incrementcount}>Increment +</button>
        <button onMouseOut={decrementcount}>Decrement -</button>

        <h2>The count is : {count}</h2>
        </>
    }
}
export default Hocomponent(Hovercounter)