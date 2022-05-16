import { Component } from "react";
import{Child1} from" ./Chaild1";

 class Par1 extends Component{
    constructor(){
        super()
        this.state={
            Name:'Thla Deena',
            Age:'25',
            Email:'deenav0003@gamil.com',
            City:'Chittoor'
        }
    }
    render(){
        return <div>
            <Child1 Students={this.state}/>
        </div>
    }
} export default Par1