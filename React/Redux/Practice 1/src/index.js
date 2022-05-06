import React from 'react';
import ReactDOM from 'react-dom';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import App from './App';
import { Provider } from 'react-redux'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: state => {           
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer,
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

