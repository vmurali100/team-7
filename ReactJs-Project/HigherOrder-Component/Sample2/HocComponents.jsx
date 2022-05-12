import { Component } from "react"

const HocComponents=( EmtyComp)=>{
    class Classcomp extends Component{
        constructor(){
            super()

            this.state={
                money:0
            }
        }
        incrementHolder=()=>{
            this.setState({ money:this.state.money+1})
        }
        decrementHolder=()=>{
            this.setState({money:this.state.money-1})
        }
        render(){
            return <EmtyComp
            money={this.state.money}
            increment={this.incrementHolder}
            decrement={this.decrementHolder}/>
        }
    }
    return Classcomp
}
export default HocComponents