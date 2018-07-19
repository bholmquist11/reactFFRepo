import React, { Component } from 'react';
import ComposeForm from './composeForm.js';
import ExpensesForm from './ExpensesForm.js';

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
                    { fieldLabel: 'First Name', fieldName: 'userName' },
                    { fieldLabel: 'Monthly Income from All Sources', fieldName: 'income' }                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderExpenses} />);

            return form;
        } else if (this.state.stage === 'expenses') {
            const form = (<ExpensesForm
                fields={[
                    { fieldLabel: 'Rent / Mortgage', fieldName: 'rent' },
                    { fieldLabel: 'Internet', fieldName: 'internet' },
                    { fieldLabel: 'Water, Gas, Electric', fieldName: 'utilities' },
                    { fieldLabel: 'Groceries', fieldName: 'groceries' },
                    { fieldLabel: 'Auto Payment', fieldName: 'autoPayment' },
                    { fieldLabel: 'Auto Insurance', fieldName: 'autoInsurance' },
                    { fieldLabel: 'Eating Out', fieldName: 'eatingOut' },
                    { fieldLabel: 'Drinks', fieldName: 'drinks' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.renderOneTimeExpenses}
                setExpensesState={this.props.setExpensesState} />);

            return form;
        } else if (this.state.stage === 'oneTimeExpenses') {
            const form = (<ComposeForm
                fields={[
                    { fieldLabel: 'Expense 1', fieldName1: 'expense1Name', fieldName2: 'expense1Value' },
                    { fieldLabel: 'Expense 2', fieldName1: 'expense2Name', fieldName2: 'expense2Value' },
                    { fieldLabel: 'Expense 3', fieldName1: 'expense3Name', fieldName2: 'expense3Value' },
                    { fieldLabel: 'Expense 4', fieldName1: 'expense4Name', fieldName2: 'expense4Value' },
                    { fieldLabel: 'Monthly Income from All Sources', fieldName: 'income' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.accountBalances} />);

            return form;
        } else if (this.state.stage === 'accountBalances') {
            const form = (<ComposeForm
                fields={[
                    { fieldLabel: 'Checking Account', fieldName: 'checking' },
                    { fieldLabel: 'Savings and Investments', fieldName: 'savings' },
                    { fieldLabel: 'Credit Debt (-)', fieldName: 'credit' },
                ]}
                grabFormData={this.props.grabFormData}
                postClickRender={this.completeOnboarding} />);

            return form;
        }
    }
}


export default OnboardingForms;