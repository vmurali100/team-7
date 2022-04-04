import { Component } from "react";
import { Eone } from "./Childe";

export class Sade extends Component {
    constructor() {
        super()
        this.state = {
            Obje: {
                Carname: "BMW",
                Sitting: 4,
                Color: "Blue",
                Model: 2022,
                Price: 1000000000
            }
        }
    }
    render() {
        return <Eone Osv={this.state.Obje}/>
    }
}