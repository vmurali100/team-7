import React, { Component } from 'react'
import './CSS-6.css'

export default class Sample6 extends Component {
    constructor(props) {
        super(props)

        this.state = {

            form6: {
                error: '',
                num: '',
                fname: '',
                gender: '',
                lname: '',
                dob: '',
                street: '',
                city: '',
                state: '',
                pcode: '',
                count: ''
            }

        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.form6 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form6: newUser });
    };

    submited = () => {
        // console.log(this.state.form6)
        let newdata = [...this.state.Mydataform6]
        newdata.push({ ...this.state.form6 })
        this.setState({ Mydataform6: newdata })
        this.clearsuri()
    }

    clearsuri = () => {
        this.setState({
            form6: {
                error: '',
                num: '',
                fname: '',
                gender: '',
                lname: '',
                dob: '',
                street: '',
                city: '',
                state: '',
                pcode: '',
                count: ''
            },
            Mydataform6:[]
        })
    }

    delt = (i) => {
        let deleting = this.state.Mydataform6.filter((form6, index) => {
            return i !== index
        });
        this.setState({ Mydataform6: deleting })

    }
    render() {
        return (
            <div className='raj'>
                <div className='bigcontainer'>
                    <div className='head'>
                        <h3>Kickstart Web</h3>
                        <nav>

                            <ul>

                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>

                            </ul>

                        </nav>
                    </div>
                    <div className='secondary'>
                        <h1>Person Form</h1>
                        <hr />

                        <input type="tel" name="error" id="" placeholder='Error Messages' value={this.state.form6.error} onChange={(e) => { this.handleChange(e); }} /><br /><br />

                        <form >
                            <div className='fir'>
                                <label htmlFor="">Titile No.</label>
                                <input type="number" name="num" id="" value={this.state.form6.num} onChange={(e) => { this.handleChange(e); }} />

                                <label htmlFor="">First Name </label>
                                <input type="text" name="fname" id="" placeholder='Chee Kin' value={this.state.form6.fname} onChange={(e) => { this.handleChange(e); }} />
                                <p>This is Inline help</p>

                                <label htmlFor="">Gender </label>

                                <select name="gender" id="" value={this.state.form6.gender} onChange={(e) => { this.handleChange(e); }}>

                                    <option value="" >------------------</option>
                                    <option value="" >------------------</option>
                                    <option value="" >------------------</option>

                                </select>
                                <p>Select your gender-</p>

                            </div>

                            <div className='sec'>

                                <label htmlFor="">Last Name </label>
                                <input type="text" name="lname" id="" placeholder='Lim' value={this.state.form6.lname} onChange={(e) => { this.handleChange(e); }} />
                                <p>This field has error</p>

                                <label htmlFor="">Date of Birth </label>
                                <input type="text" name="dob" id="" placeholder='dd/mm/yyyy' value={this.state.form6.dob} onChange={(e) => { this.handleChange(e); }} />

                            </div>

                        </form>

                        <h1>Address</h1>
                        <hr />
                        <br />
                        <label htmlFor="">Street </label>
                        <input type="text" name="street" id="" value={this.state.form6.street} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                        <label htmlFor="">City</label>
                        <input type="text" name="city" id="" value={this.state.form6.city} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                        <label htmlFor="">State</label>
                        <input type="text" name="state" id="" value={this.state.form6.state} onChange={(e) => { this.handleChange(e); }} /> <br /><br />

                        <label htmlFor="">Post Code</label>
                        <input type="text" name="pcode" id="" value={this.state.form6.pcode} onChange={(e) => { this.handleChange(e); }} /> <br /> <br />

                        <label htmlFor="">Country</label>
                        <select name="count" id="" value={this.state.form6.count} onChange={(e) => { this.handleChange(e); }}>

                            <option value="">--------------</option>
                            <option value="">--------------</option>
                            <option value="">--------------</option>

                        </select>

                        <button type='button' onClick={this.submited}>Click</button>
                        <br /><br />
                        <hr />

                        <strong>@Kickstart Web 2012</strong>

                    </div>

                </div>

                <div className='tablee'>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Error</th>
                                <th>NUM</th>
                                <th> First Name</th>
                                <th>Gender</th>
                                <th>Last Name</th>
                                <th>DOB</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>State</th>
                                <th>pincode</th>
                                <th>Cont.No</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Mydataform6.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.error}</td>
                                    <td>{suri.num}</td>
                                    <td>{suri.fname}</td>
                                    <td>{suri.gender}</td>
                                    <td>{suri.lname}</td>
                                    <td>{suri.dob}</td>
                                    <td>{suri.street}</td>
                                    <td>{suri.city}</td>
                                    <td>{suri.state}</td>
                                    <td>{suri.pcode}</td>
                                    <td>{suri.count}</td>
                                    <td><button className='edittttt'>Edit</button></td>
                                    <td><button className='warning' onClick={() => { this.delt(i) }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
