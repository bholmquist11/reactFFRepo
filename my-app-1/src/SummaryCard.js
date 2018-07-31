import './SummaryCard.css';
import React, { Component } from 'react';

class SummaryCard extends Component {
    constructor(props) {
        super(props);

        this.sumExpenses = this.sumExpenses.bind(this);
    }

    sumExpenses(expensesObject) {
        let sumTotal = 0;

        for (let key in expensesObject) {
            let valueTempString = expensesObject[key];

            let valueTemp = parseInt(valueTempString, 10);

            sumTotal += valueTemp;
        }

        return sumTotal;
    }

    render() {
        const jsxElements = [];

        jsxElements.push(
            <div key='summaryIncome'>Income: {this.props.income}</div>
        );

        if (this.props.expensesObject) {
            const sumExpenses = this.sumExpenses(this.props.expensesObject);

            jsxElements.push(
                <div key='summaryExpenses'>Expenses: {sumExpenses}</div>
            );
        }

        if (this.props.oneTimeExpensesObject) {
            const sumOneTimeExpenses = this.sumExpenses(this.props.oneTimeExpensesObject);

            jsxElements.push(
                <div key='sumOneTimeExpenses'>One-Time Expenses: {sumOneTimeExpenses}</div>
            );
        }

        return (
            <div className='SummaryCard'>
                {jsxElements}
            </div>
        );

    }
}

export default SummaryCard;