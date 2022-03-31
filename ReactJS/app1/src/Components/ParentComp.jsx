import { Component } from "react";
import ChildComp from "./ChildComp";

export default class ParentComp extends Component {
    constructor() {
        super()
        this.state = {
           person:{
            fname: "Murali",
            lname: "Krishna",
            email: "murali@gmail.com"
           }

        }
    }
    render() {
        return <ChildComp personObj={this.state.person}/>
    }
}