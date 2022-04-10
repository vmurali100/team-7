import React, { Component } from 'react'

export default class Tillu extends Component {
    constructor() {
        super()
        this.state = {
            mydta: {
                fname: 'Surya',
                lname: 'Prakash',
                age: '23',
                city: 'Chittoor',
                pincode: '517125'
            }
        }
    }
    changinged(){
        this.setState({
            mydta: {
                fname: 'Sai',
                lname: 'Prakash',
                age: '26',
                city: 'Hyderbad',
                pincode: '517243'
            }
        })
    }

    
    render() {
        return (
            <div>
                <h2>MYRESUME :{this.state.mydta}</h2>
                <button onClick={this.changinged.bind(this)}>Reset</button>
            </div>
        )
    }
}
