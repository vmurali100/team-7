import { Component } from "react"

export default class HelloGuru extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    incrementevent=()=>{
        this.setState({count:this.state.count+1})
    }
    dicrementevent=()=>{
        this.setState({count:this.state.count-1})    }
    render(){
    
        return(
            <div>
                <button type="button" onClick={this.incrementevent} >Increment</button>
                <button type="button" onClick={this.dicrementevent}>Decrement</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}