import { Component } from "react";
import Chaild1 from "./Chaild1";

export  class Friends extends Component {
    constructor() {
        super()
        this.Friend = {
            Fname: "Deena",
            Address: "Chittoor",
            Number: "987456321",
            Job: "UI Devoleper",
            Role: "Testing"

        }
    }
    render() {
        return <Chaild1  Details={ this.Friend}/>
    }
}