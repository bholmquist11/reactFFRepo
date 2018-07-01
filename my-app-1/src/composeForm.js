import React, { Component } from 'react';
import SingleTextEntry from './forms';

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const nameField = document.getElementsByName('fullName')[0];
        const emailField = document.getElementsByName('email')[0];
        const incomeField = document.getElementsByName('income')[0];

        this.props.callbackFunction(nameField, emailField, incomeField);
    }

    render() {
        return (
            <div>
                <SingleTextEntry fieldTitle='Full Name' formName='fullName' /><br />
                <SingleTextEntry fieldTitle='Email' formName='email' /><br />
                <SingleTextEntry fieldTitle='Monthly Income' formName='income' /><br />
                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}


export default ComposeForm;