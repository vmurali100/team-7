import React, { Component } from 'react'

export default class Chandhu extends Component {
    constructor() {
        super()
        this.state = {
               movie:'',
               date:'',
               Amount:''
        }
    }
    onhandled=(event)=>{
        movie=event.target.value
    }

    onhandleds=(event)=>{
        date=event.target.value
    }

    onhandledt=(event)=>{
        Amount=event.target.value
    }

    submiteed=(event)=>{
        submiteed = (event) =>{
            alert(`${this.state.movie} ${this.state.date} ${this.state.Amount}`)
         }
    }
    
    render() {
        return (
            <div>
                <form action=""  onSubmit={this.submiteed} >
                    <label htmlFor="">Movie Name</label>
                    <input type="text" value={this.state.movie} onChange={this.onhandled} /> <br /><br />
                    <label htmlFor="">booking Date</label>
                    <input type="text"  value={this.state.date} onChange={this.onhandleds}/><br /><br />
                    <label htmlFor="">Amout</label>
                    <input type="text" value={this.state.Amount} onChange={this.onhandledt} /> <br /><br />
                    <button type='button'>Click</button>
                </form>
            </div>
        )
    }
}
