import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Greeting extends Component {
    constructor(props) {
        super(props);
        // this.state = 'Guest';
        this.GuestGreeting = this.GuestGreeting.bind(this);
        this.UserGreeting = this.UserGreeting.bind(this);
    }

    UserGreeting() {
        return <h1>Welcome, {this.props.email}!</h1>;
    }

    GuestGreeting() {
        return (
            <Col smOffset={2}>
                <h1>Welcome, new user.</h1>
            </Col>
        );
    }

    render() {
        if (this.props.isLoggedIn === true) {
            const loggedInGreeting = this.UserGreeting();

            return loggedInGreeting;
        }
        const guestGreeting = this.GuestGreeting();

        return guestGreeting;
    }
}


export default Greeting;