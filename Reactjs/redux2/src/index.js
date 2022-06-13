import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    users:[]
  },
  reducers: {
   adduser:
  }
})


const store = configureStore({
  reducer: counterSlice.reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


