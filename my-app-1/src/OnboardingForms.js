import React, { Component } from 'react';
import ComposeForm from './ComposeForm.js';
import ExpensesForm from './ExpensesForm.js';
import OneTimeExpensesForm from './OneTimeExpensesForm.js';


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
                    { fieldLabel: 'First Name', fieldId: 'userName' },
                    { fieldLabel: 'Monthly Income from All Sources', fieldId: 'income' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderExpenses} />);

            return form;
        } else if (this.state.stage === 'expenses') {
            const form = (<ExpensesForm
                fields={[
                    { fieldLabel: 'Rent / Mortgage', fieldId: 'rent' },
                    { fieldLabel: 'Internet', fieldId: 'internet' },
                    { fieldLabel: 'Water, Gas, Electric', fieldId: 'utilities' },
                    { fieldLabel: 'Groceries', fieldId: 'groceries' },
                    { fieldLabel: 'Auto Payment', fieldId: 'autoPayment' },
                    { fieldLabel: 'Auto Insurance', fieldId: 'autoInsurance' },
                    { fieldLabel: 'Eating Out', fieldId: 'eatingOut' },
                    { fieldLabel: 'Drinks', fieldId: 'drinks' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderOneTimeExpenses}
                setExpensesState={this.props.setExpensesState} />);

            return form;
        } else if (this.state.stage === 'oneTimeExpenses') {
            const form = (<OneTimeExpensesForm
                fields={[
                    { fieldLabel: 'Expense 1', fieldName1: 'expense1Value', fieldName2: 'expense1Date' },
                    { fieldLabel: 'Expense 2', fieldName1: 'expense2Value', fieldName2: 'expense2Date' },
                    { fieldLabel: 'Expense 3', fieldName1: 'expense3Value', fieldName2: 'expense3Date' },
                    { fieldLabel: 'Expense 4', fieldName1: 'expense4Value', fieldName2: 'expense4Date' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderAccountBalances}
                setOneTimeExpensesState={this.props.setOneTimeExpensesState} />);

            return form;
        } else if (this.state.stage === 'accountBalances') {
            const form = (<ComposeForm
                fields={[
                    { fieldLabel: 'Checking Account', fieldId: 'checking' },
                    { fieldLabel: 'Savings and Investments', fieldId: 'savings' },
                    { fieldLabel: 'Credit Debt (-)', fieldId: 'credit' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.completeOnboarding} />);

            return form;
        }
    }
}


export default OnboardingForms;