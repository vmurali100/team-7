import { Component } from "react";

export class Compstate extends Component{
    constructor(){
        super()
        this.Cstate={
            Indias:"Delhi",
            India:{
                Andra:"Amaravathi",
                TamilNadu:"Chennei",
                Karnataka:"Bengalore",
                Telangana:"Hydarabad",
                Kerala:"Thiruvananthapura"
            },
            StatesinIndia:["Mahasarta","Madyapradesh","Panjab","UttarKhand"]
        }
    }

    render(){
        

        let { India,StatesinIndia} = this.Cstate

        return <div>
            <h1> Indias capital is : {this.Cstate.Indias} </h1>

            {/* obj */}
         { Object.values(India).map((jrj,i)=>{
                return  <li key={i}>{ jrj}</li>
         })} 
         {/* Arrey */}
          <ul>
             { StatesinIndia.map((rrr,i)=>{
                 return <li key={i}>{rrr}</li>
             })}
          </ul>

        </div>
    }
}