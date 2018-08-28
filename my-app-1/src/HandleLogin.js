import React, { Component } from 'react';
import ComposeForm from './ComposeForm.js';
import OnboardingForms from './OnboardingForms.js';


class HandleLogin extends Component {
    constructor(props) {
        super(props);
        this.buildSigninComp = this.buildSigninComp.bind(this);
        this.renderPostSignup = this.renderPostSignup.bind(this);
    }

    // checkStatus() {
    //     if (this.props.loginStatus === false) {
    //         const signinComp = this.buildSigninComp();

    //         return signinComp;
    //     } {
    //         const onboardingForms = this.renderPostSignup();

    //         return onboardingForms;
    //     }
    // }

    buildSigninComp() {
        const signupForm = [
            <h2 key='signinHeading'>Please sign in or sign up.</h2>,
            <ComposeForm
                key='signinForm'
                switchStage={this.props.switchStage}
                newStage='income'
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
            stage={this.props.stage}
            grabFormData={this.props.grabFormData}
            setExpensesState={this.props.setExpensesState}
            setAccountBalancesState={this.props.setAccountBalancesState}
            renderExpenses={this.props.renderExpenses}
            switchStage={this.props.switchStage} />);

        return onboardingForms;
    }

    render() {

        if (this.props.stage === 'login') {
            return this.buildSigninComp();
        }

        const onboardingForms = (<OnboardingForms
            key='onboardingForms'
            stage={this.props.stage}
            switchStage={this.props.switchStage}
            grabFormData={this.props.grabFormData}
            setIncomeState={this.props.setIncomeState}
            setExpensesState={this.props.setExpensesState}
            setOneTimeExpensesState={this.props.setOneTimeExpensesState}
            setAccountBalancesState={this.props.setAccountBalancesState}
            renderExpenses={this.props.renderExpenses} />);

        return onboardingForms;
    }
}


export default HandleLogin;