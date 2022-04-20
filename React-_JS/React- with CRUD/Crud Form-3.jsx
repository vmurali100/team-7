import React, { Component } from 'react'
import './CSS-3.css'

export default class Sample3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form3:{
              fname:'',
              lname:'',
              mail:'',
              comment:''
            },
            Allform3:[],
            Spindex:null
        }
    }

    handleChange = (e) => {
        let newUser = { ...this.state.form3 };
        newUser[e.target.name] = e.target.value;
        this.setState({ form3:newUser });
    };

    Clearform = () => {
        this.setState({
            form3:{
                fname:'',
                lname:'',
                mail:'',
                comment:''
              }
        })
    }

    componentDidMount=()=>{
        let Allform3 =JSON.parse(localStorage.getItem('Allform3' ))
        if(Allform3){
            this.setState({Allform2:Allform3})
        }
    }    

    Editted=(i)=>{
        this.setState({form3:this.state.Allform3[i]})
        this.setState({Spindex:i})
    }

    delt = (i) => {
        let deleting = this.state.Allform3.filter((form3, index) => {
            return i !== index
        });
        this.setState({ Allform3: deleting })

    }  

    handlesubmited=()=>{
        let NewUser = [...this.state.Allform3]
        NewUser.push({...this.state.form3})
        this.setState({Allform3:NewUser})
        localStorage.setItem("Allform3",JSON.stringify(NewUser))
        this.Clearform()
    }  

    handleupdate=()=>{
        let NewUser=[...this.state.Allform3];
        NewUser[this.state.Spindex]=this.state.form3;
        this.setState({Allform3:NewUser,Spindex:null})
        localStorage.setItem("Allform3",JSON.stringify(NewUser))
        this.Clearform()
    }

    render() {
        return (
            <div className='raj'>
                 <div className='mainboard'>
                 <div className='one'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThNCQ8ixlXHdb6q2uhc5-xTfYl8lqC1wd5iQ&usqp=CAU" alt="" /><br />
                     <h1>Contact Us</h1>
                     <b>We would love to hear from you  !</b>
                 </div> <br />
                 <div className='two'>
                     <form>
                         <label htmlFor="">First Name</label><br /><br />
                         <input type="text" name="fname" id="" placeholder='Enter Firsr name' value={this.state.form3.fname} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                         <label htmlFor="">Last Name</label><br /><br />
                         <input type="text" name="lname" id="" placeholder='Enter Last name' value={this.state.form3.lname} onChange={(e) => { this.handleChange(e); }}/> <br /><br />
                         <label htmlFor="">Email</label><br /><br />
                         <input type="text" name="mail" id="" placeholder='Enter email' value={this.state.form3.mail} onChange={(e) => { this.handleChange(e); }} /> <br /><br />
                         <label htmlFor="">Commment</label><br /><br />
                         <textarea name="comment" id="" cols="60" rows="5" value={this.state.form3.comment} onChange={(e) => { this.handleChange(e); }}></textarea> <br /><br />

                         {this.state.Spindex ?<button onClick={this.handleupdate}>Update</button>:<button type='button' onClick={this.handlesubmited}>Sign up</button> }
                     </form>
                 </div>
            </div>
                <div className='tablee'>
                <table  border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last  Name</th>
                                <th>Email </th>
                                <th>Comment</th>                               
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Allform3.map((suri, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{suri.fname}</td>
                                    <td>{suri.lname}</td>
                                    <td>{suri.mail}</td>
                                    <td>{suri.comment}</td>                                  
                                    <td><button className='edittttt'  onClick={() => { this.Editted(i) }}>Edit</button></td>
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
