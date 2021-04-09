import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// eslint-disable-next-line no-unused-vars
import App from './components/App';
import Todolist from './components/Todolist';
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
    // <App subject="Vincent" />, 
    <Todolist />,
    document.getElementById('root'));


