import { Component } from "react";
import Parent from "./Parent";

export default class extends Component{
    constructor(){
        super()
        this.Users={
            
                Studentname:" JayasankarRaju",
                Rollnumber:"520",
                EmailId:"rajubhai7341@gmail.com",
                Password:"517419"
            }
        
    }
    render(){
        return(
            <div>
                <Parent  UserDetails= {this.Users}/>
            </div>
        )
    }
}