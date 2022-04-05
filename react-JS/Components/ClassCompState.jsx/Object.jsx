import { Component } from "react";
export class ClassCompState extends Component {
    constructor() {
        super()
        // creating on Object
        this.Student = {
            person: {
                fname: "Thala",
                lname: "Deena",
                phone: "9640526503",
                Email: "dennav0003@gamil.com",
                city: "Chittoor"
            },

        }
    }
    render() {
        let { fname, lname, phone, Email, city } = this.Student.person
        return (
            <div>
                {<ul>
                    <li>{fname}</li>
                    <li>{lname}</li>
                    <li>{phone}</li>
                    <li>{Email}</li>
                    <li>{city}</li>
                </ul>}
            </div>
        )

    }
}