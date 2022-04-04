import { Component } from "react";

export class Info extends Component {
    constructor() {
        super()
        this.state = {
            hello: "",
            employee: {},
            book: [""]
        }
    }
    changehello = () => {
        let newState = {...this.state }
        newState.hello = "how are you"
        this.setState(newState)
    }
    officeemployee = () => {
        let newState = {...this.state }
        newState.employee = {
            fname: "Thala",
            lname: "deena",
            email: "deenav003@gamil.com"
        }
        this.setState(newState)
    }
    bookshop = () => {
        let newState = {...this.state }
        newState.book = ["Raju", "surya", "Deena", "Rehaman", "Sadhik"]
        this.setState(newState)
    }
    render() {
        let { employee, book } = this.state
        return (
            <div>
                <button onClick={this.changehello}>click button</button>
                <h1>{this.state.hello}</h1>

                <hr />
                <button onClick={this.officeemployee}>submit</button>
                {Object.values(employee).map((data) => {
                    return <li>{data}</li>
                })}

                <hr />
                <button onClick={this.bookshop}>open</button>
                {book.map((vale,i) => {
                    return <li key={i}>{vale}</li>
                })}
            </div>
        )
    }
}