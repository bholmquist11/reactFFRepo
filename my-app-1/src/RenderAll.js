import React, { Component } from 'react';
import Greeting from './Greeting.js';
import HandleLogin from './HandleLogin.js';
import SummaryCard from './SummaryCard.js';


// CURRENT POSTIION
// We've gotten our one-time expenses for working but havent checked if dates 
// are storing correctly.

// NEXT STEPS
// Get accountBalances form working. STILL NOT.
// Build and render <ProjectionForm /> once onboardingComplete state is reached.


class RenderAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userLogin: {
                isLoggedIn: false,
            },
            stage: 'login',
        };
        this.grabFormData = this.grabFormData.bind(this);
        this.switchStage = this.switchStage.bind(this);
        this.setIncomeState = this.setIncomeState.bind(this);
        this.setExpensesState = this.setExpensesState.bind(this);
        this.setOneTimeExpensesState = this.setOneTimeExpensesState.bind(this);
        this.setAccountBalancesState = this.setAccountBalancesState.bind(this);

    }

    grabFormData(fieldList) {
        fieldList.map((item) => {
            const tempObject = {};

            tempObject[item.name] = item.value;
            this.setState(
                tempObject,
            );
        });
    }

    switchStage(newStage) {
        this.setState({ stage: newStage });
    }

    setIncomeState(incomeValue) {
        this.setState({ income: incomeValue });
    }

    setExpensesState(expensesObject) {
        this.setState(expensesObject);
    }

    setOneTimeExpensesState(oneTimeExpensesObject) {
        this.setState(oneTimeExpensesObject);
    }

    setAccountBalancesState(accountBalancesObject) {
        this.setState(accountBalancesObject);
    }


    render() {
        const components = [
            <Greeting
                key='greeting'
                email={this.state.userEmail}
                isLoggedIn={this.state.userLogin.isLoggedIn} />,
            <HandleLogin
                key='login'
                loginStatus={this.state.userLogin.isLoggedIn}
                logUserIn={this.logUserIn}
                grabFormData={this.grabFormData}
                setIncomeState={this.setIncomeState}
                setExpensesState={this.setExpensesState}
                setOneTimeExpensesState={this.setOneTimeExpensesState}
                setAccountBalancesState={this.setAccountBalancesState}
                switchStage={this.switchStage}
                stage={this.state.stage} />,
        ];

        // If we've finished a summarizable form, start rendering summary cards.
        if ('income' in this.state) {
            components.splice(1, 0,
                <SummaryCard
                    key='summary'
                    currentStage={this.stage}
                    switchStage={this.switchStage}
                    income={this.state.income}
                    expensesObject={this.state.expensesObject}
                    oneTimeExpensesObject={this.state.oneTimeExpensesObject}
                    accountBalancesObject={this.state.accountBalancesObject} />
            );
        }

        // If onboarding forms are done, replace HandleLogin with ProjectionTable
        // if (this.state.stage === 'onboardingComplete') {
        //     components.splice(3, 0,
        //         <ProjectionTable />
        //     );
        // }

        return (
            <div key='allComponents'>
                {components}
            </div>
        );
    }
}


export default RenderAll;