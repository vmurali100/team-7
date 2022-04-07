import React, { Component } from 'react'

export default  class Santhosh extends Component {
    constructor(props){
        super(props)

    }
  render(props) {
    return (
      <div>
          <h1>hello{props.name}iam{props.age}</h1>
      </div>
    )
  }
}
