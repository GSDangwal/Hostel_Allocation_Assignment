import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBFb0TBBMp--BzvxgiH2guWN7wR3QnHyU8",
  authDomain: "hostel-booking-app-90f51.firebaseapp.com",
  projectId: "hostel-booking-app-90f51",
  storageBucket: "hostel-booking-app-90f51.appspot.com",
  messagingSenderId: "271936881449",
  appId: "1:271936881449:web:4e8f9ad57dbccad35ded38",
  measurementId: "G-58212ZJW90"
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

