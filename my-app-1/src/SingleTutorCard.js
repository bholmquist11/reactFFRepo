import './TutorCard.css';
import React, { Component } from 'react';


class SingleTutorCard extends Component {
    render() {
        return (
            <div className='TutorCard'>
                <p> {this.props.name}<br />
                    {this.props.major}<br />
                    {this.props.year}<br />
                    {this.props.hoursTaught}</p>
            </div>
        );
    }
}


export default SingleTutorCard;