import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SingleTextEntry from './forms'


class ComposeForm extends Component {
    render() {
        return(
            <div>
                <SingleTextEntry fieldTitle='Full Name' formName='signup' /><br />
                <SingleTextEntry fieldTitle='Email' formName='signup' /><br />
                <SingleTextEntry fieldTitle='Monthly Income' formName='signup' /><br />
            </div>
        )
    }
}


export default ComposeForm;