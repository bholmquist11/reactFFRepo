import React, { Component } from 'react';
import Greeting from './Greeting.js';
import HandleLogin from './HandleLogin.js';
import SummaryCard from './SummaryCard.js';

// const Parse = require('parse');

// Parse.initialize('zTyCpMH8KpFOachUvQJmVR5ksWIv73PzPvfCFG6h',
//     'pUWo38sEcvFN8BVKWMRbcrnnP54eWwfr1ebrHcsI');

// Parse.serverURL = 'https://penjiapp-dev.herokuapp.com/parse/1';

// const user = new Parse.User();

// user.save({
//     username: 'bholmquist11',
//     password: 'youknow',
// }, {
//     success: function(response) {
//         alert('New object created! ObjectId: ' + response.id);
//     },
//     error: function(response, error) {
//         alert('Error' + error.message);
//     },
// });

// const query = new Parse.Query('User');

// query.find({
//     success: function(results) {
//         alert('Success.' + results.length);
//         console.log(results);

//     },
//     error: function(results, error) {
//         alert('Error' + error.message);
//     },
// });


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
        this.setState({
            userLogin: {
                isLoggedIn: true,
            },
        });
    }

    setExpensesState(expensesObject) {
        this.setState(expensesObject);
    }

    setOneTimeExpensesState(oneTimeExpensesObject) {
        this.setState(oneTimeExpensesObject);
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
                setExpensesState={this.setExpensesState} />,
        ];

        if ('income' in this.state) {
            components.splice(1, 0,
                <SummaryCard
                    key='summary'
                    state={this.state}
                    income={this.state.income}
                    expensesObject={this.state.expensesObject}
                    oneTimeExpensesObject={this.state.oneTimeExpensesObject} />
            );
        }

        return (
            <div key='allComponents'>
                {components}
            </div>
        );
    }
}


export default RenderAll;