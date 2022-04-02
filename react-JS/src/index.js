import React from 'react';
import ReactDOM from 'react-dom';
import ClassCopm1, { ClassCopm10, ClassCopm2, ClassCopm3, ClassCopm4, ClassCopm5, ClassCopm6, ClassCopm7, ClassCopm8, ClassCopm9 } from './ClassCopm';
import FunctionCopm1, { FunctionCopm10, FunctionCopm2, FunctionCopm3, FunctionCopm4, FunctionCopm5, FunctionCopm6, FunctionCopm7, FunctionCopm8, FunctionCopm9 } from './FunctionCopm';
import ParentUser from './ParentCopm';
import { Student } from './ParentCopm1';
import { Employee } from './ParentCopm2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ParentUser/>
    <Student/>
    <Employee/>
    <ClassCopm1/>
    <ClassCopm2/>
    <ClassCopm3/>
    <ClassCopm4/>
    <ClassCopm5/>
    <ClassCopm6/>
    <ClassCopm7/>
    <ClassCopm8/>
    <ClassCopm9/>
    <ClassCopm10/>
    <FunctionCopm1/>
    <FunctionCopm2/>
    <FunctionCopm3/>
    <FunctionCopm4/>
    <FunctionCopm5/>
    <FunctionCopm6/>
    <FunctionCopm7/>
    <FunctionCopm8/>
    <FunctionCopm9/>
    <FunctionCopm10/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
