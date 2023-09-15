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
import InlineApp from './Components/style/inlineApp';
import RefComponent from './Components/Hooks/UseRefTest';
import MemberList from './Components/Contact/MemberList';
import EffectComponent from './Components/Hooks/UseEffectTest';
import ReducerComponent from './Components/Hooks/reducer/ReducerComponent';
import ComplexReducerHook from './Components/Hooks/reducer/ComplexReducerHook';
import JsonPlaceholder2 from './Components/axios/JsonPlaceHolder2';
import MainApp from './Components/new/redux/MainApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
     <MainApp/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
