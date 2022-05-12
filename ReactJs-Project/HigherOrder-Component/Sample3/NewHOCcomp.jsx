import { Component } from "react";

export const NewHOCcomp = (Person) => {
   class ClassComp extends Component {

      constructor(props) {
         super(props)

         this.state = {
            AccountBalance: 0
         }
      }
      incrementHandler = () => {
         this.setState({ AccountBalance: this.state.AccountBalance + 1 })
      }
      decrementHandler = () => {
         this.setState({ AccountBalance: this.state.AccountBalance - 1 })

      }
      render() {
         return <Person
            AccountBalance={this.state.AccountBalance}
            increment={this.incrementHandler}
            decrement={this.decrementHandler} />
      }
   }
   return ClassComp

}
export default NewHOCcomp