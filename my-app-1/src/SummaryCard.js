import './SummaryCard.css';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class SummaryCard extends Component {
    constructor(props) {
        super(props);

        this.sumExpenses = this.sumExpenses.bind(this);
    }

    sumExpenses(expensesObject) {
        let sumTotal = 0;

        for (let key in expensesObject) {
            let valueTempString = expensesObject[key].value;

            let valueTemp = parseInt(valueTempString, 10);

            sumTotal += valueTemp;
        }

        return sumTotal;
    }

    render() {
        const jsxElements = [];

        jsxElements.push(
            <Col
                xs={6}
                lg={2}
                className='SummaryCard'>
                <div key='summaryIncome'>Income: {this.props.income}</div>
            </Col>
        );

        if (this.props.expensesObject) {
            const sumExpenses = this.sumExpenses(this.props.expensesObject);

            jsxElements.push(
                <Col
                    xs={6}
                    lg={2}
                    className='SummaryCard'>
                    <div key='summaryExpenses'>Expenses: {sumExpenses}</div>
                </Col>
            );
        }

        if (this.props.oneTimeExpensesObject) {
            const sumOneTimeExpenses = this.sumExpenses(this.props.oneTimeExpensesObject);

            jsxElements.push(
                <Col
                    xs={6}
                    lg={2}
                    className='SummaryCard'>
                    <div key='sumOneTimeExpenses'>One-Time Expenses: {sumOneTimeExpenses}</div>
                </Col>
            );
        }

        return (
            <Col xs={12}>
                {jsxElements}
            </Col>
        );

    }
}

export default SummaryCard;