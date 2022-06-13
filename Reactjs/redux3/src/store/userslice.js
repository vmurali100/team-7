import { createSlice  } from '@reduxjs/toolkit'

const userslice=createSlice({
    name:"users",
    initialstate:{
        users:["balaji","chanakya","baan"],
        products:[]
    },
    redusers:{
        adduser:(state,action)=>{
            console.log(action)
            state.users.push(action.payload)
        },
        deleteuser:(state,action)=>{
            let deluser =state.users.find((usr)=>usr === acyion.payload)
            if(deluser){
                 
                state.users=state.users.filter((usr)=>usr !== action.payload)
                return state
            }
            //  state.users.filter((us)=>us!==action.payload)
        },
        updateuser:(state,action)=>{}
    }
})

export default userslice.reduser
export const {adduser,deleteuser,updateuser} =userslice.actions