import React, { Component } from "react";

export class Demo extends Component{
    constructor(){
        super()
        this.state={

            datas : "",
            informations : {},
            grops : [],


           fruit:"apple",
           food:"biriyani",
           juice:"fruity,Badaham",
           Vehical:"car",
           water:"cool"
        }
    }

    render(){

        let{fruit,food,juice,Vehical,water}=this.state

        return(
            <div>
                <ol>
                    <li>{fruit}</li>
                    <li>{food}</li>
                    <li>{juice}</li>
                    <li>{Vehical}</li>
                    <li>{water}</li>
                </ol>
            </div>
        )
    }
}