import { Component } from "react";

export default class Run extends Component{
    constructor (props){
        super (props)
        this.state={
            User:[],
            person:{
                name:'',
                mobile:'',
                city:'',
                email:'',
                office:'',
            },
            A :null
        }
    }
    render(){
        return(
            <div className="parent">
                <div className="parent1">
                <form action="">
                    <label htmlFor="">name</label>
                    <input type="text" name="name" id="A" />
                    <label htmlFor="">mobile</label>
                    <input type="text" name="mobile" id="B" />
                    <label htmlFor="">city</label>
                    <input type="text" name="city" id="C" />
                    <label htmlFor="">email</label>
                    <input type="text" name="email" id="D" />
                    <label htmlFor="">office</label>
                    <input type="text" name="office" id="E" />


                </form>
                </div>

            </div>
        )
    }
}