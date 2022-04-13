import React, { Component } from 'react'

export const Boos = (EmptyComponent) => {
 class NewComponent extends Component{
     constructor(props){
         super(props)
         this.state={
            count:0,
         };
     }
     handleIncrement = ()=>{
         this.setState({count:this.state.count + 1});
     };
     handleDecrement=()=>{
         this.setState({count:this.state.count -1});
     }
 }
render(){
    return <EmptyComponent
    count={this.state.count}
    IncrementCount={this.handleIncrement}
    DecrementCount={this.DecrementCount}
    
    />
    }
    return <NewComponent/>
    }
