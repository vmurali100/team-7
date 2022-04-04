import { Component } from "react";

export  class StateEvent extends Component {
    constructor() {
        super()

        this.state = {
            Content: "Informations :-",
            Details: { },
            MyFriends: ["Myfrnds Are :-"]
        }
    }
    viewContent = () => {
        let newState = { ...this.state }
        newState.Content = "This is Surya Sp From Sunline IT Instustions ,In a Chittoor Branch.Iam UI deloveloper in So On Comapany"
        this.setState(newState)
    }

    viewDetails = () => {
        let newState = { ...this.state }
        newState.Details = {
            fname: "R Surya",
            lname: "SP",
            email: "suri@gmail.com",
            Number:"4562787",
            city:"Chittoor"
        }
        this.setState(newState)
    }

    viewMyfriends = () => {
        let newState = { ...this.state };
        newState.MyFriends = ["Raju","Deena","Rehaman","sadik","Balaji","Rahul","Kunal","Surya"]
        this.setState(newState)

    }
    render() {
        // let { fname, lname, email,Number,City } = this.state.person

        let { Details, Myfriends } = this.state
        return (
            <div>


                <h2>{this.state.Content}</h2>
                <button onClick={this.viewContent}>Click to Get</button>
                <br />



                <ul>
                    {Object.values(Details).map((val, i) => {
                        return <li key={i}>{val}</li>
                    })}
                </ul>
                <button onClick={this.viewDetails}>Click to Data</button>
                <br />


                <ul>
                    {Myfriends.map((frd, i) => {
                        return <li key={i}>{frd}</li>
                    })}
                </ul>
                <button onClick={this.viewMyfriends}>Click to get Friends list</button>

            </div>
        )

    }
}