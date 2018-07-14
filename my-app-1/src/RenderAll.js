import React, { Component } from 'react';
import ComposeForm from './composeForm';
import Greeting from './Greeting.js';
import HandleLogin from './HandleLogin.js'
import Toggle from './Toggle.js';
import TutorCardListing from './TutorCardListing.js';


class RenderAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailSignup: 'Undefined',
            userData: {
                'Income': 0,
                'Name': 'NameTest',
            },
            userLogin: {
                isLoggedIn: false
            },
        }
        this.grabFormData = this.grabFormData.bind(this);
        this.logUserIn = this.logUserIn.bind(this);
    }

    grabFormData(fieldList) {
        fieldList.map((item, index) => {
            const tempObject = {};
            tempObject[item.name] = item.value;
            console.log(tempObject);
            this.setState({
                userData: tempObject
            })
            console.log(this.state)
        })
    }

    logUserIn() {
        this.setState({
            userLogin: {
                isLoggedIn: true
            }
        })
    }

    render() {
        // stateComponent = this.
        return (
            <div>
                <Greeting email={this.state.emailSignup} isLoggedIn={this.state.userLogin.isLoggedIn} />
                <HandleLogin loginStatus={this.state.userLogin.isLoggedIn} logUserIn={this.logUserIn} grabFormData={this.grabFormData} /><br />
            </div>
        );
    }
}


export default RenderAll;