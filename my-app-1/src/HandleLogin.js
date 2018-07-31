import React, { Component } from 'react';
import ComposeForm from './ComposeForm.js';
import OnboardingForms from './OnboardingForms.js';


class HandleLogin extends Component {
    constructor(props) {
        super(props);
        this.buildSigninComp = this.buildSigninComp.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.renderPostSignup = this.renderPostSignup.bind(this);
    }

    checkStatus() {
        if (this.props.loginStatus === false) {
            const signinComp = this.buildSigninComp();

            return signinComp;
        } {
            const onboardingForms = this.renderPostSignup();

            return onboardingForms;
        }
    }

    buildSigninComp() {
        const signupForm = [
            <h2 key='signinHeading'>Please sign in or sign up.</h2>,
            <ComposeForm
                key='signinForm'
                postClickRender={this.props.logUserIn}
                grabFormData={this.props.grabFormData}
                fields={[
                    { fieldLabel: 'Email Address', fieldId: 'userEmail' },
                    { fieldLabel: 'Password', fieldId: 'passwordSignup' },
                ]} />,
        ];

        return signupForm;
    }

    renderPostSignup() {
        const onboardingForms = (<OnboardingForms
            key='onboardingForms'
            grabFormData={this.props.grabFormData}
            setExpensesState={this.props.setExpensesState} />);

        return onboardingForms;
    }

    render() {
        const loginModule = this.checkStatus();

        return loginModule;
    }
}


export default HandleLogin;