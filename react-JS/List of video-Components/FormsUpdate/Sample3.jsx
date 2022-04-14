import React, { Component } from 'react'

export default class Sample3 extends Component {
    render() {
        return (
            <div>

                <div style={{'backgroundColor':'darkviolet','width':'1000px','height':'571px'}} class="container">
                    <div style={{ 'position':'relative','top':'40px','right':'-15px' }} class="row">
                        <div style={{'background-color':'darkorange', 'width': '300px', }} class="col-4">
                            <br />
                            <svg style={{'width':'100px','height':'100px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg><br />
                            <h2>Contact Us</h2><br />
                            <h3>We would love to hear from you !</h3>
                        </div>
                        <div style={{'backgroundColor':'white'}} class="col-8">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Frist Name:</label>
                                <input type="name" class="form-control" placeholder='Enter Frist Name' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Last Name:</label>
                                <input type="name" class="form-control" placeholder='Enter Last Name' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email:</label>
                                <input type="name" class="form-control" placeholder=' Enter Email ' />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Comment:</label>
                                <input style={{ 'height': '150px' }} type="name" class="form-control" />
                            </div>
                            <button style={{ 'width': '100px', 'position': 'relative', 'top' :'-5px' }} type="submit" class="btn btn-primary">Submit</button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
