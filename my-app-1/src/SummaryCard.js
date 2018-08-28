import './SummaryCard.css';
import React, { Component } from 'react';
import AccountBalancesCard from './AccountBalancesCard';
import { Col } from 'react-bootstrap';
import SingleSummaryCard from './SingleSummaryCard';

class SummaryCard extends Component {
    constructor(props) {
        super(props);

        this.sumValues = this.sumValues.bind(this);
    }

    sumValues(expensesObject) {
        let sumTotal = 0;

        for (let key in expensesObject) {
            let valueTempString = expensesObject[key].value;

            if (valueTempString !== '') {
                let valueTemp = parseInt(valueTempString, 10);

                sumTotal += valueTemp;
            }
        }

        return sumTotal;
    }

    render() {
        const jsxElements = [];

        jsxElements.push(
            <SingleSummaryCard
                label='Income'
                value={this.props.income}
                stage={this.props.currentStage}
                cardStage='income'
                switchStage={this.props.switchStage} />
        );

        if (this.props.expensesObject) {
            const sumValues = this.sumValues(this.props.expensesObject);

            jsxElements.push(
                <SingleSummaryCard
                    label='Expenses'
                    value={sumValues}
                    stage={this.props.currentStage}
                    cardStage='expenses'
                    switchStage={this.props.switchStage} />
            );
        }

        if (this.props.oneTimeExpensesObject) {
            const sumOneTimeExpenses = this.sumValues(this.props.oneTimeExpensesObject);

            jsxElements.push(
                <SingleSummaryCard
                    label='One-time Expenses'
                    value={sumOneTimeExpenses}
                    stage={this.props.currentStage}
                    cardStage='oneTimeExpenses'
                    switchStage={this.props.switchStage} />
            );
        }

        if (this.props.accountBalancesObject) {
            jsxElements.push(
                <AccountBalancesCard
                    label='Account Balances'
                    stage={this.props.currentStage}
                    cardStage='accountBalances'
                    switchStage={this.props.switchStage}
                    accountBalancesObject={this.props.accountBalancesObject} />
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