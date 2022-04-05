import { Component } from "react";

export default class ClassEvent extends Component {
    constructor() {
        super()
        this.state = {
            Inform: "",
            Detail: {},
            Friends: []
        }
    }
    // can't change the state directly ,because react can't directly change the value
    // so copy the value,then change the value and reasign the value
    showme = () => {
        let newstate = { ...this.state }  //copy of state
        newstate.Inform = "How are u all" //assign new value to the inform
        this.setState(newstate) // updating the exisiting state
    }
    showdetail = () => {
        let newstate = { ...this.state }
        newstate.Detail = {
            Happy: 'Be happy',
            Sad: 'Be sad'
        }
        this.setState(newstate)
    }
    showfriend = () => {
        let newstate = { ...this.state }
        newstate.Friends = ["vijay", "ajith", "surya", "rajini"]
        this.setState(newstate)
    }
    render() {
        let { Detail,Friends } = this.state
        return <div>
            <button onClick={this.showme}>Show Information</button>
            <h2>{this.state.Inform}</h2>
            <hr />

            <button onClick={this.showdetail}>Show Detail</button>
            <ul>
                {Object.values(Detail).map((val, i) => {
                    return <li key={i}>{val}</li>
                })}
            </ul>
            <hr />

            <button onClick={this.showfriend}>Show Friends</button>
            <ul>
                {Friends.map((frd, i) => {
                    return <li key={i}>{frd}</li>
                })}
            </ul>
        </div>
    }
}