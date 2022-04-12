import React, { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :'Deena'
      }
      console.log('LifeCycle2 constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle2 getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycle2 componentDidMount')
    }

    
    shouldComponentUpdate() {
        console.log('LifeCycle2 shouldComponentUpdate')
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycle2 getSnapshotBeforeUpdate')
        return null
      }
  
      componentDidUpdate(){
        console.log('LifeCycle2 componentDidUpdate')
      }
  
      changestate = ()=>{
        this.setState({
          name : 'Codevolution'
          
        })
      }

  render() {
      console.log('LifeCycle2 render')
    return (
      <div>LifeCycle2</div>
    )
  }
}

export default LifeCycle2