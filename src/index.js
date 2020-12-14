import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyAK38pPMgexT6928KkqMa78T_0NTVTSyq4",
  authDomain: "crud--react-app.firebaseapp.com",
  projectId: "crud--react-app",
  storageBucket: "crud--react-app.appspot.com",
  messagingSenderId: "863529365696",
  appId: "1:863529365696:web:53f48bee2c0ee549f07d25",
  measurementId: "G-RFWFEP3JMV"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
