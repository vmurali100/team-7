import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react';

const IncreseValue= createSlice({
  name:"CountValue",
  initialState:{
    value:1000
  },
  reducers:{
    increment:state=>{
      state.value+=1
    },
    decremant:state=>{
      state.value-=1
    }
  }
}) 
const ValueStore= configureStore({
  reducer:IncreseValue.reducer
})

 ReactDOM.render(
   <Provider ValueStore={ValueStore}>
     <App/>
   </Provider>
   ,document.getElementById('root'));