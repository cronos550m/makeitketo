import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const express = require('express'); 

// const app = express();

// const path = require('path');
// const publicPath = path.resolve(__dirname, './src/public');
// app.use(express.urlencoded({ extended: false })); //para poder trabajar con los datos que envia el formulario
// app.use(express.static(publicPath)); // expone la carpeta publica

ReactDOM.render(
    <App />,
    
    
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
