import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TableApp from './TableApp'
import reportWebVitals from './reportWebVitals';
import ArticleApp from './Components/Article/ArticleApp';
import Buttons from './Components/events/Buttons';
import PersonApp from './Components/events/props/PersonApp';
import InputApp from './Components/state/InputApp';
import StepperApp from './Components/state/stepperApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StepperApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
