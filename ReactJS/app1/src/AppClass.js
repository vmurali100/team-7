import { Component } from "react";
import { Kunal } from "./RahulClass";
import MyComp from "./App"
export default class Raju extends Component {
    render() {
        return <div>
            <h2>I am Class Component And From Raju Component</h2>
            <Kunal />
            <MyComp/>
        </div>
    }
}