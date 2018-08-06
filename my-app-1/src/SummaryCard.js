import './SummaryCard.css';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import SingleSummaryCard from './SingleSummaryCard';

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
            <SingleSummaryCard
                label='Income'
                value={this.props.income}
                stage={this.props.stage}
                cardStage='income'
                switchStage={this.props.switchStage} />
        );

        if (this.props.expensesObject) {
            const sumExpenses = this.sumExpenses(this.props.expensesObject);

            jsxElements.push(
                <SingleSummaryCard
                    label='Expenses'
                    value={sumExpenses}
                    stage={this.props.stage}
                    cardStage='expenses'
                    switchStage={this.props.switchStage} />
            );
        }

        if (this.props.oneTimeExpensesObject) {
            const sumOneTimeExpenses = this.sumExpenses(this.props.oneTimeExpensesObject);

            jsxElements.push(
                <SingleSummaryCard
                    label='One-time Expenses'
                    value={sumOneTimeExpenses}
                    stage={this.props.stage}
                    cardStage='oneTimeExpenses'
                    switchStage={this.props.switchStage} />
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