import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 only for React 17 use 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import MainContainer from './components/main-container';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 
// just change the code between <React.StrictMode>
root.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
