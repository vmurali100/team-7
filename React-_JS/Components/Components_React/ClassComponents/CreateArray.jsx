import { Component } from "react";

export class Fruits extends Component{
    constructor(){
        super()
        this.state={
            fruits:{
                fruity1:"Apple",
                fruity2:"Banana",
                fruity3:"Cheerry",
                fruity4:"Mango",
                fruity5:"Sapota",
                fruity6:"Grapes",
                fruity7:"Watermillion",
                fruity8:"Gova"
            }
        }
    }

    render(){

        let{fruity1,fruity2,fruity3,fruity4,fruity5,fruity6,fruity7,fruity8}=this.state.fruits

        return(
            <div>
                <ol>
                    <li>{fruity1}</li>
                    <li>{fruity2}</li>
                    <li>{fruity3}</li>
                    <li>{fruity4}</li>
                    <li>{fruity5}</li>
                    <li>{fruity6}</li>
                    <li>{fruity7}</li>
                    <li>{fruity8}</li>
                </ol>
            </div>
        )
    }
}