import React, { Component } from 'react'

export default class Rakesh extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Personal Information</legend>
                        <label htmlFor=""> first name :</label>
                        <input type="text" /> <br/> <br />
                        <label htmlFor=""> last name :</label>
                        <input type="text" /> <br/> <br />
                        <label htmlFor=""> Email :</label>
                        <input type="text" /> <br/> <br />
                        <label htmlFor=""> Password :</label>
                        <input type="text" /> <br/><br />
                    </fieldset>
                </form>
                <button>Submit</button>


            </div>
        )
    }
}
