import { configureStore, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from '../../../redux_2/src/App';

const CoutRehaman = createSlice({
  name: "Money",
  initialState: {
    value: 500
  },
  reducers: {
    increased: state => {
      state.value += 10
    },
    decresed: state => { 
      state.value -=10
    }
  }
}) 

const store = configureStore({
  reducer:CoutRehaman.reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));



