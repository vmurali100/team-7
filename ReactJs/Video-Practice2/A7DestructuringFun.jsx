import React from 'react'

// 
const UserList=props=>{
   const {name,Address}=props
    return(
        <div>
            <h1> UserName{props.name}Address{props.Address}</h1>
        </div>
    )
}
export default UserList