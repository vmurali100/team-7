import React, { Component } from 'react'
import LifeCycle2 from './Lifecycle2'

export class LifeCycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :'Deena'
      }
      console.log('LifeCycle1 constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle1 getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle1 componentDidMount')
    }

    
    shouldComponentUpdate() {
      console.log('LifeCycle1 shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifeCycle1 getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('LifeCycle1 componentDidUpdate')
    }

    changestate = ()=>{
      this.setState({
        name : 'Codevolution'
        
      })
    }

  render() {
      console.log('LifeCycle1 render')
    return ( <div>
      <div>LifeCycle1</div>
      <button onClick={this.changestate}>Change state</button>
      <LifeCycle2/>
      </div>
    )
  }
}

export default LifeCycle1