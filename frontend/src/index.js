import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './assets/styles/main.css';
import App from './App';

const rootElement = document.getElementById('root'); // The DOM element you want to attach your React application to
const root = ReactDOM.createRoot(rootElement); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
