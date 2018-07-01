import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);  // "Class components should always call base constr. with props"
        this.state = { date: new Date() };  // The whole "this" instance has a state.
    }

    componentDidMount() {  // Lifecycle hook, once it's been rendered to DOM
        const tickInterval = 1000;

        this.timerID = setInterval(
            () => this.tick(),
            tickInterval
        );
    }

    componentWillUnmount() {  // Lifecycle hook
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
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

export default Clock;