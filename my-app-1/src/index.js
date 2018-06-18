import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import Welcome from './Welcome';
import ManyWelcomes from './ManyWelcomes';
import Button from './buttons'
import SingleTextEntry from './forms'
import ComposeForm from './composeForm'
import Toggle from './Toggle.js'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SingleTextEntry fieldTitle="Full Name" formName="signup" />, 
                document.getElementById('signupForm')
                );
ReactDOM.render(<SingleTextEntry fieldTitle="Email Address" formName="signup" />, 
                document.getElementById('signupForm')
                );
ReactDOM.render(<SingleTextEntry fieldTitle="Monthly Income" formName="signup" />, 
                document.getElementById('signupForm')
                );
ReactDOM.render(<ComposeForm />, document.getElementById('signupForm'))
ReactDOM.render(<Toggle />, document.getElementById('toggle'))


class Clock extends React.Component {
    constructor(props) {
        super(props);  // "Class components should always call base constr. with props"
        this.state = {date: new Date()};  // The whole "this" instance has a state.
    }

    componentDidMount() {  // Lifecycle hook, once it's been rendered to DOM
        this.timerID = setInterval( 
            () => this.tick(), 
            1000 
        );
    }

    componentDidUnmount() {  // Lifecycle hook
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Introducing Clock!</h1>
                <h2>Time is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('clock'))
