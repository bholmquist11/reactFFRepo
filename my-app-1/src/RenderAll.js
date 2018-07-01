import React, { Component } from 'react';
import ComposeForm from './composeForm';
import Greeting from './Greeting.js';
import Toggle from './Toggle.js';


class RenderAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'Income': 0,
            'Name': 'NameTest',
        };
        this.grabSignupData = this.grabSignupData.bind(this)
    }


    grabSignupData(nameField, emailField, incomeField) {
        this.setState({
            'Name': nameField,
            'Email': emailField,
            'Income': incomeField,
        });
        console.log('Just set the state!')
    }


    render() {
        return (
            <div>
                <Greeting /><br />
                <ComposeForm callbackFunction={this.grabSignupData} /><br />
                <Toggle /><br />
            </div>
        );
    }
}


export default RenderAll;