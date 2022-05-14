import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { adduser, deleteuser } from "../store/UsersSlice";

export const Users=()=>{
    const allusers = useSelector((state)=>{
        return state.Users
    })
    const dispatch=useDispatch()
    const handleadduser=()=>{
        dispatch(adduser("Bramin"))
    }
    const handledeleteuser=(user)=>{
        dispatch(deleteuser(user))
    }
    return(
     <div>
        <h2>users component</h2>
        <button onClick={handleadduser}> Adduser</button>
        <ul>
            {allusers.map((user)=><li key={user} onClick={()=>{handledeleteuser(user)}}>{user}</li>)}
        </ul>
     </div>
    )
    }