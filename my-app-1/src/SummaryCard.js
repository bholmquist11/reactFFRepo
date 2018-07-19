import './SummaryCard.css';
import React, { Component } from 'react';

class SummaryCard extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // buildSummaryCard(dataList) {
        // const summaryJSX = dataList.map((item) => {
            // <div>{}
        // })
    // }

    render() {
        return (
            <div className='SummaryCard'>
                Income: {this.props.income}
            </div>
        );

    }
}

export default SummaryCard;