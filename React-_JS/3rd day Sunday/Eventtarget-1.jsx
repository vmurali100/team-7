import React, { Component } from 'react'

export default class Bandhu extends Component {
    constructor(){
        super()
        this.state={            
            name:'',
            gender:'',
            num:'',
            city:''
        }
    }

    handlerchange = (event) => {
        this.setState({
            name:event.target.value,
           
        })
    }

    handler = (event) => {
        this.setState({
            
            gender:event.target.value,
         
        })
    }

    handlerc = (event) => {
        this.setState({
           
            num:event.target.value,
            
        })
    }

    handlerch = (event) => {
        this.setState({
          
            city:event.target.value
        })
    }
    

    submiteed = (event) =>{
       alert(`${this.state.name} ${this.state.gender} ${this.state.num} ${this.state.city}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submiteed}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" value={this.state.name} onChange={this.handlerchange}  /><br /><br />

                    <label htmlFor="">Gender</label>
                    <input type="text" name="" id="" value={this.state.gender} onChange={this.handler} /><br /><br />

                    <label htmlFor="">Number</label>
                    <input type="text" name="" id="" value={this.state.num} onChange={this.handlerc} /><br /><br />

                    <label htmlFor="">City</label>
                    <input type="text" name="" id="" value={this.state.city} onChange={this.handlerch} /><br /><br />

                    <button type='button'>Reset</button>
                </form>
            </div>
        )
    }
}
