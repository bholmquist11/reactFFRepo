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
        const fields = ['Full Name', 'Email', 'Income'];
        const elements = fields.map((fieldName, index) => {
            return (<SingleTextEntry
                key={index}
                fieldTitle={fieldName}
                formName='masterForm' />
            );
        });

        return (
            <div>
                {elements}
                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}


export default ComposeForm;