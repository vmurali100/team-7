import React, { Component } from "react";
import { Moon } from "./Props";

export class Deatail extends Component {
    render() {
        return (
            <div>
                <h2>Those are all my Team Members</h2>
                <Moon name='deena' age='24'>
                    <p>This is only for Deena Component</p>
                </Moon>
            

                <Moon name='raju' age='24'>
                    <button>Raju Deatails</button>
                </Moon>

                <Moon name='rehaman' age='24' />

                <Moon name='balaji' age='24' />
            </div>
        );
    }
}