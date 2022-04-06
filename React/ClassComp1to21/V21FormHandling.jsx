import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Student: {
                MyName: '',
                Moblileno:'',
                City:''
            }
        }
    }

    ChangeMyName = (e) => {
        let newPerson = { ...this.state.Student }
        newPerson[e.target.name] = e.target.value
        this.setState({ Student: newPerson })
    }

    ChangeBottun = () => {
        console.log(this.state.Student)
    }
    render() {
        return (
            <div>
                <label htmlFor="">Employee Name : </label>
                <input type="text" name='MyName' value={this.state.MyName} onChange={this.ChangeMyName} /><br />

                <label htmlFor="">Mobile no : </label>
                <input type="text" name='Moblileno' value={this.state.Moblileno} onChange={this.ChangeMyName} /><br />

                <label htmlFor="">City : </label>
                <input type="text" name='City' value={this.state.City} onChange={this.ChangeMyName} /><br />

                <button onClick={this.ChangeBottun}>On Click</button>
            </div>


        )
    }
}
