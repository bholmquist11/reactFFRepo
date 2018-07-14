import React, { Component } from 'react';
import ComposeForm from './composeForm.js';

class OnboardingForms extends Component {
    constructor(props) {
        super(props);

        this.renderExpenses = this.renderExpenses.bind(this);
        this.renderOneTimeExpenses = this.renderOneTimeExpenses.bind(this);
        this.renderAccountBalances = this.renderAccountBalances.bind(this);

        this.state = {
            stage: 'income',
        };
    }

    renderExpenses() {
        this.setState({
            stage: 'expenses',
        });
    }

    renderOneTimeExpenses() {
        this.setState({
            stage: 'oneTimeExpenses',
        });
    }

    renderAccountBalances() {
        this.setState({
            stage: 'accountBalances',
        });
    }

    completeOnboarding() {
        this.setState({
            stage: 'complete',
        });
    }

    render() {
        if (this.state.stage === 'income') {
            const form = (<ComposeForm
                fields={[
                    { fieldTitle: 'First Name', fieldName: 'userName' },
                    { fieldTitle: 'Monthly Income from All Sources', fieldName: 'income' }                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderExpenses} />);

            return form;
        } else if (this.state.stage === 'expenses') {
            const form = (<ComposeForm
                fields={[
                    { fieldTitle: 'Rent / Mortgage', fieldName: 'rent' },
                    { fieldTitle: 'Internet', fieldName: 'internet' },
                    { fieldTitle: 'Water, Gas, Electric', fieldName: 'utilities' },
                    { fieldTitle: 'Groceries', fieldName: 'groceries' },
                    { fieldTitle: 'Auto Payment', fieldName: 'autoPayment' },
                    { fieldTitle: 'Auto Insurance', fieldName: 'autoInsurance' },
                    { fieldTitle: 'Eating Out', fieldName: 'eatingOut' },
                    { fieldTitle: 'Drinks', fieldName: 'drinks' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderOneTimeExpenses} />);

            return form;
        } else if (this.state.stage === 'oneTimeExpenses') {
            const form = (<ComposeForm
                fields={[
                    { fieldTitle: 'Expense 1', fieldName1: 'expense1Name', fieldName2: 'expense1Value' },
                    { fieldTitle: 'Expense 2', fieldName1: 'expense2Name', fieldName2: 'expense2Value' },
                    { fieldTitle: 'Expense 3', fieldName1: 'expense3Name', fieldName2: 'expense3Value' },
                    { fieldTitle: 'Expense 4', fieldName1: 'expense4Name', fieldName2: 'expense4Value' },
                    { fieldTitle: 'Monthly Income from All Sources', fieldName: 'income' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.accountBalances} />);

            return form;
        } else if (this.state.stage === 'accountBalances') {
            const form = (<ComposeForm
                fields={[
                    { fieldTitle: 'Checking Account', fieldName: 'checking' },
                    { fieldTitle: 'Savings and Investments', fieldName: 'savings' },
                    { fieldTitle: 'Credit Debt (-)', fieldName: 'credit' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.completeOnboarding} />);

            return form;
        }
    }
}


export default OnboardingForms;