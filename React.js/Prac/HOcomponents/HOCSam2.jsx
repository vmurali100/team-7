import React, {Component} from "react";
export const HOCSam2 =(EmptyComponent) =>{  
    
    class NewHOCSam2 extends Component {
        constructor(props){
            super(props)
            thi.state={
                Count : 0,
            };
        }
        countchange=()=>{
            this.setState({
                Count : this.state.Count+5
            })
        }
        changecountss=()=>{
            this.setState({
                Count : this.state.Count-5
            })
        }
      render() {
        return (
        
             <EmptyComponent
             Count = {this.state.Count}
             Increase = {this.countchange}
             Decrement = {this.changecountss}
             />
        
        );
      }
    
    }
      return NewHOCSam2
    }   
