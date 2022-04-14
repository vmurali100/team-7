import React, { Component } from 'react'

export default class Good extends Component {

    render() {
        return (
            <div style={{'background-color':'gold','width':'900px','height':'700px','position':'relative','right':'-340px'}} className='parent'>
                <div  style={{'background-color':'white','width':'800px','height':'620px','position':'relative','top':'40px'}} class="container">
                   <h2 style={{'position':'relative','right':'-250px'}} >Form Validation</h2>
                   <hr />
                    <div class="row">
                        <div class="col">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Frist Name</label>
                                    <input type="name" class="form-control" placeholder='Frist Name' />
                                </div>
                                <div class="mb-3"><br />
                                    <label for="exampleInputPassword1" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder='Email'  />
                                </div>
                                <div class="mb-3"><br />
                                    <label for="exampleInputPassword1" class="form-label">City</label>
                                    <input type="city" class="form-control" placeholder='City' />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label"></label>
                                    <input type="email" class="form-control" placeholder='Choose file...'  />
                                </div>
                                <div class="mb-3 form-check"><br />
                                    <input type="radio" name="" id="" />
                                    <label style={{color:'red'}} class="form-check-label" for="exampleCheck1">Toggle this custom radio </label>
                                </div><br /><br />
                                
                            </form>
                        </div>
                        <div class="col">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputname" class="form-label">Last Name</label>
                                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Last Name'/>
                                </div>
                                <div class="mb-3"><br />
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password'/>
                                </div>
                                <div class="mb-3"><br />
                                    <label for="exampleInput" class="form-label">Select any value</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Open this select menu' />
                                </div>
                                <div class="mb-3 form-check"><br />
                                    <input type="checkbox" name="" id="" />
                                    <label style={{color:'red'}} class="form-check-label" for="exampleCheck1">Check this custom checkbox</label>
                                </div><br /><br />
                                <div class="mb-3 form-check">
                                    <input type="radio" name="" id="" />
                                    <label style={{color:'red'}} class="form-check-label" for="exampleCheck1">Or toggle thhis other custom radio </label>
                                </div>
                                
                            </form>
                        </div>
                        <hr />
                        <button style={{'width':'200px','position':'relative','right':'-280px','top':'-10px'}} type="submit" class="btn btn-primary">Submit</button>

                    </div>

                </div>
            </div>
        )
    }
}
