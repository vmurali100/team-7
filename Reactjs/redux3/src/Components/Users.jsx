import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteuser } from "../store/userslice";

export const Users=()=>{
    // to access data from store,we need selectors
    const allusers = useSelector((state)=>{
          return state.users   
    })
    // to trigger an action,we need a dispatch hook
    const dispatch=useDispatch()

    const handleadduser=()=>{
        dispatch(adduser("saji"))
    }
    const handledeleteuser=()=>{
        dispatch(deleteuser())
    }
    return(
        <div>
            <h2>users component</h2>
            <button onClick={handleadduser}>Add user</button>
            <ul>
                {allusers.map((user)=><li key={user} onClick={()=>{handledeleteuser(user)}}>{user}</li>)}
            </ul>
        </div>
    )
}