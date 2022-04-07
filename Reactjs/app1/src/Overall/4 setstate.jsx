import { Component } from "react";

export default class ClassEvent extends Component {
    constructor() {
        super()
        this.state = {
            Inform: "",
        }
    }
    // can't change the state directly ,because react can't directly change the value
    // so copy the value,then change the value and reasign the value
    showme = () => {
        let newstate = { ...this.state }  //copy of state
        newstate.Inform = "How are u all" //assign new value to the inform
        this.setState(newstate) // updating the exisiting state
    }
    
    render() {
        return <div>
            <button onClick={this.showme}>Show Information</button>
            <h2>{this.state.Inform}</h2>
        </div>
    }
}