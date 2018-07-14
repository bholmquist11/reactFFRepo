import React, { Component } from 'react';
import ComposeForm from './composeForm.js';
import OnboardingForms from './OnboardingForms.js'


class HandleLogin extends Component {
    constructor(props) {
        super(props);
        this.buildSigninComp = this.buildSigninComp.bind(this)
        this.checkStatus = this.checkStatus.bind(this)
        this.renderPostSignup = this.renderPostSignup.bind(this)
    }

    checkStatus() {
        if (this.props.loginStatus === false) {
            const signinComp = this.buildSigninComp();

            return signinComp;
        } {
            const onboardingForms = this.renderPostSignup();

            return [
                <h1>You are now logged in.</h1>,
                onboardingForms,
            ];
        }
    }

    buildSigninComp() {
        console.log('building signin form')
        const signupForm = [
            <h2>Please sign in or sign up.</h2>,
            <ComposeForm 
                postClickRender={this.props.logUserIn}
                grabFormData={this.props.grabFormData}
                fields={[
                    {fieldTitle: 'Email Address', fieldName: 'userEmail'},
                    {fieldTitle: 'Password', fieldName: 'passwordSignup'},
                ]} />
        ]
        return signupForm
    }

    renderPostSignup() {
        const onboardingForms = <OnboardingForms grabFormData={this.props.grabFormData} />
        return onboardingForms
    }

    render() {
        const loginModule = this.checkStatus()
        return loginModule
    }
}


export default HandleLogin;