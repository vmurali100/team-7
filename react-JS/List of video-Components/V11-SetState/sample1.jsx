import React, { Component } from 'react';

export default class One extends Component {
    constructor() {
        super()
        this.state = {
            Money: 1
        }
    }
    Debit() {
        this.setState({
            Money: this.state.Money + 1
        })
        console.log(this.state.Money)
    }
    Credit() {
        this.setState({
            Money: this.state.Money - 1
        })
    }
    render() {
        return (
            <div>
              <h3>Money: {this.state.Money}</h3>
              <button onClick={()=> this.Debit()}>Debit</button>
              <button onClick={()=> this. Credit() }> Credit</button >
          </div >
        ) 
          
        
      }
    
}

