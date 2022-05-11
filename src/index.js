import React from 'react';
// import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/modal.js'
import 'bootstrap/js/src/base-component.js'
import 'bootstrap/js/src/dropdown.js'
import 'bootstrap/js/src/alert.js'
import 'bootstrap/js/src/button.js'
import 'bootstrap/js/src/toast.js'
import 'bootstrap/js/src/offcanvas.js'
import 'bootstrap/js/src/popover.js'
import 'bootstrap/js/src/tooltip.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
