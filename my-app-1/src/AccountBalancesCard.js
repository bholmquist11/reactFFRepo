import './SummaryCard';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class SingleSummaryCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const switchTo = this.props.cardStage;

        this.props.switchStage(switchTo);
    }

    render() {
        return (
            <div>
                <Col
                    xs={6}
                    md={2}
                    className='SummaryCard'>
                    Checking: {this.props.accountBalancesObject['Checking Account']}<br />
                    Savings: {this.props.accountBalancesObject['Savings and Investments']}<br />
                    Credit Debt: {this.props.accountBalancesObject['Credit Debt (-)']}<br />
                    <Button type='submit' onClick={this.handleClick}>Edit</Button>
                </Col>
            </div>
        );
    }
}


export default SingleSummaryCard;