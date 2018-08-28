import React, { Component } from 'react';
import AccountBalancesForm from './AccountBalancesForm';
import ExpensesForm from './ExpensesForm.js';
import IncomeForm from './IncomeForm.js';
import OneTimeExpensesForm from './OneTimeExpensesForm.js';


class OnboardingForms extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         stage: 'income',
    //     };
    // }

    completeOnboarding() {
        this.setState({
            stage: 'complete',
        });
    }

    render() {
        if (this.props.stage === 'income') {
            const form = (<IncomeForm
                key='incomeForm'
                fields={[
                    { fieldLabel: 'Monthly Income from All Sources', fieldId: 'income' },
                ]}
                grabFormData={this.props.grabFormData}
                switchStage={this.props.switchStage}
                newStage='expenses'
                setIncomeState={this.props.setIncomeState} />);

            return form;
        } else if (this.props.stage === 'expenses') {
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
                switchStage={this.props.switchStage}  // Switchs stage in top-level state to trigger next form
                newStage='oneTimeExpenses'
                setExpensesState={this.props.setExpensesState} />);  // Adds form data to the top-level state

            return form;
        } else if (this.props.stage === 'oneTimeExpenses') {
            const form = (<OneTimeExpensesForm
                fields={[
                    { fieldLabel: 'Expense 1', fieldId1: 'expense1Name', fieldId2: 'expense1Value', fieldId3: 'expense1Date' },
                    { fieldLabel: 'Expense 2', fieldId1: 'expense2Name', fieldId2: 'expense2Value', fieldId3: 'expense1Date' },
                    { fieldLabel: 'Expense 3', fieldId1: 'expense3Name', fieldId2: 'expense3Value', fieldId3: 'expense1Date' },
                    { fieldLabel: 'Expense 4', fieldId1: 'expense4Name', fieldId2: 'expense4Value', fieldId3: 'expense1Date' },
                ]}
                grabFormData={this.props.grabFormData}
                switchStage={this.props.switchStage}  // Switchs stage in top-level state to trigger next form
                newStage='accountBalances'
                setOneTimeExpensesState={this.props.setOneTimeExpensesState} />);  // Adds form data to the top-level state

            return form;
        } else if (this.props.stage === 'accountBalances') {
            const form = (<AccountBalancesForm
                fields={[
                    { fieldLabel: 'Checking Account', fieldId: 'checking' },
                    { fieldLabel: 'Savings and Investments', fieldId: 'savings' },
                    { fieldLabel: 'Credit Debt (-)', fieldId: 'credit' },
                ]}
                grabFormData={this.props.grabFormData}
                switchStage={this.props.switchStage}  // Switchs stage in top-level state to trigger next form
                newStage='onboardingComplete'
                setAccountBalancesState={this.props.setAccountBalancesState} />);

            return form;
        } else if (this.props.stage === 'onboardingComplete') {
            const form = <p>Onboarding complete. Edit values using buttons above.</p>;

            return form;
        }

    }
}


export default OnboardingForms;