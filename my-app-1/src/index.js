import './index.css';
import App from './App';
import Clock from './Clock';
import ComposeForm from './composeForm';
import Greeting from './Greeting.js';
import React from 'react';
import ReactDOM from 'react-dom';
import RenderAll from './RenderAll';
import Toggle from './Toggle.js';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<RenderAll />, document.getElementById('all'));
// ReactDOM.render(<ComposeForm />, document.getElementById('signupForm'));
// ReactDOM.render(<Toggle />, document.getElementById('toggle'));
// ReactDOM.render(<Clock />, document.getElementById('clock'));
// ReactDOM.render(<Greeting isLoggedIn='true' />, document.getElementById('clock'));

