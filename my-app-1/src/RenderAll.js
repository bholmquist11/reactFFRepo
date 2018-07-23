import React, { Component } from 'react';
import Greeting from './Greeting.js';
import HandleLogin from './HandleLogin.js';
import SummaryCard from './SummaryCard.js';

class RenderAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userLogin: {
                isLoggedIn: false,
            },
        };
        this.grabFormData = this.grabFormData.bind(this);
        this.logUserIn = this.logUserIn.bind(this);
        this.setExpensesState = this.setExpensesState.bind(this);
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

    logUserIn() {
        console.log({
            userLogin: {
                isLoggedIn: true,
            },
        });
        this.setState({
            userLogin: {
                isLoggedIn: true,
            },
        });
    }

    setExpensesState(expensesObject) {
        console.log(expensesObject);
        this.setState(expensesObject);
    }

    render() {
        const components = [
            <div key='greetingAndLogin'>
                <Greeting
                    key='greeting'
                    email={this.state.userEmail}
                    isLoggedIn={this.state.userLogin.isLoggedIn} />
                <HandleLogin
                    key='login'
                    loginStatus={this.state.userLogin.isLoggedIn}
                    logUserIn={this.logUserIn}
                    grabFormData={this.grabFormData}
                    setExpensesState={this.setExpensesState} /><br />
            </div>,
        ];

        if ('income' in this.state) {
            components.push(
                <SummaryCard
                    key='summary'
                    state={this.state}
                    income={this.state.income}
                    expensesObject={this.state.expensesObject} />
            );
        }

        return (
            <div>
                {components}
            </div>
        );
    }
}


export default RenderAll;