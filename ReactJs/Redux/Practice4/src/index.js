import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const moneySlice= createSlice({
  name:"money",
  initialState:{
    value:0
  },
  reducers:{
    incremanted:state=>{
      state.value+=1
    },
    decremanted:state=>{
      state.value-=1
    }
  }  
})

const Store=configureStore({
  reducer:moneySlice.reducer
})
ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root'));
