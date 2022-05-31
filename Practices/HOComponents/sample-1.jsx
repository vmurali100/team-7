import { Component } from "react/cjs/react.production.min";

export const HOComponent =(Empty)=>{
    class Abc extends Component{
        constructor(){
            super()
            this.state={
                Money:0
            }
        }
        increament=()=>{
            this.setState({
                Money:this.state.Money + 1

            })
        }
        Decrement =()=>{
            this.setState({ 
                Money:this.state.Money - 1
            })
        }
        render=() {
            return <Empty
            Money={this.state.Money}
            increament={this.increament}
            Decrement={this.Decrement}
            />

        }
    }
    return Abc
}
export default  HOComponent