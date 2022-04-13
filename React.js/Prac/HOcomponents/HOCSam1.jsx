import React, {Component} from "react";
export const HOCSam1 =(EmptyComponent) =>{  
    
    class NewHOCSam1 extends Component {
        constructor(props){
            super(props)
            thi.state={
                Count : 0,
            };
        }
        changecount=()=>{
            this.setState({
                Count: this.state.Count+1
            });
        }
        changecountsss=()=>{
            this.setState({
                Count: this.state.Count-1
            });
        }
      render() {
        return (
        
             <EmptyComponent
             Count = {this.state.Count}
             Increase = {this.changecount}
             Decrement = {this.changecountsss}
             />
        
        );
      }
    
    }
      return NewHOCSam1
    }   
