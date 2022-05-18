import React, { Component } from 'react'



export const HocComponent = (Emty) => {
    
     class Child extends Component {
         constructor(props) {
           super(props)
         
           this.state = {
              count:0,
           }
         }

         IncreatementEvent=()=>{
             this.setState({count:this.state.count +1})
         }
          Deacrementevent=()=>{
              this.setState({count:this.state.count -1})
          }
      render() {
        return (
          <div>
              <Emty
              count={this.state.count}
              increment={this.IncreatementEvent}
              decrement={this.Deacrementevent}
              />
          </div>
        )
      }
    }
    
  return Child
}
export default HocComponent
