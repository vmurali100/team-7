import React, { Component } from 'react'
import MethodsAsProps from './V15MethodsProps1'

export  class MethodsProps extends Component {
    constructor(props){
        super(props)
        this.state = {
            EmployeeName : " Bava I love you "
        }
        this.ChangeProps=this.ChangeProps.bind(this)
    }

    ChangeProps(){
        alert('Hello'+this.state.EmployeeName)
    }
  render() {
    return (
      <div>
        <MethodsAsProps  ChangeProps={this.ChangeProps}/>
      </div>
    )
  }
}
