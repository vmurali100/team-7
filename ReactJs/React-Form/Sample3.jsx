import React, { Component } from 'react'

export default class Sample3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Employee:{
            FirstName:"",
            LastName:"",



         }
      }
    }
    Handler=(e)=>{
        const newState={ ... this .state.Employee}
        newState[e .target.name]=e.target.value
        this.setState({Employee:newState})
    }
    Enterbtn=()=>{
        console.log(this.state.Employee)
    }
    render() {
        return (
            <div className='parent'>
               <div className="child">
               <div class="row">
                    <div class="col-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                       <div className='HD'>
                       <h1> Contact Us</h1>
                        <p>We would love to hear from you !</p>
                       </div>
                    </div>
                    <div class="col-8">
                        <form>
                            <div class="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">FirstName</label>
                                <input type="email" className="form-control" name='FirstName' value={this.state.Employee.FirstName} onChange={(e)=>{this.Handler(e)}} placeholder=' Enter First Name' />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">LastName</label>
                                <input type="password" className="form-control"name='LastName' value={this.state.Employee.LastName} onChange={(e)=>{this.Handler(e)}} placeholder='Enter Last Name' />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="password" className="form-control" name='Email' value={this.state.Employee.Email} onChange={(e)=>{this.Handler(e)}} placeholder='Enter Email' />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Comment:</label><br />
                                <textarea name="Comment" value={this.state.Employee.Comment} onChange={(e)=>{this.Handler(e)}} cols="68" rows="5"></textarea>
                            </div>

                           
                            <button  type="submit" onClick={this.Enterbtn}  class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

               </div>
            </div>
        )
    }
}
