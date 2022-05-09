import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"users",
    initialState:[{
        "id": 11,
        "email": "AMullens@magna.com",
        "username": "JChristopher"
    },
    {
        "id": 12,
        "email": "MFatchett@risus.ly",
        "username": "VAlvarez"
    },
    {
        "id": 13,
        "email": "MKohn@elementum.com",
        "username": "BNeese"
    },],
    reducers:{
        addUser:(state,action)=>{
           state.push(action.payload)
            console.log(action)
        },
        updateUser:(state,action)=>{
            state.forEach((usr)=>{
                if(usr.id == action.payload.id){
                    usr = action.payload
                }
            })
        },
        deleteUser:(state,action)=>{
            return state.filter((usr)=>usr.username !== action.payload.username)
        }
    }
})

export default userSlice.reducer
export const {addUser,getAllUsers,updateUser,deleteUser} = userSlice.actions