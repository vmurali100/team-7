import { Component } from "react";

export default class Flower extends Component {
    constructor() {
        super()
        this.state = {
            Chandy: {
                manju: "white",
                sanju: "Black",
                Manoj: 'light White',
                saroja: 'light black'
            }
        }
    }
    render() {
        let {manju,sanju,Manoj,saroja}=this.state.Chandy
        return (
            <div>
                <h1>Flowers :-</h1>
                <ul>
                    <li>{manju}</li>
                    <li>{sanju}</li>
                    <li>{Manoj}</li>
                    <li>{saroja}</li>
                </ul>
            </div>
        )
    }
}