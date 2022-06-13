import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import usersreducer from './store/userslice'
import { configureStore } from '@reduxjs/toolkit'

const store=configureStore({
  reducer:usersreducer
})
ReactDOM.render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


