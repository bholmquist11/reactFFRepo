import './TutorCard.css';
import React, { Component } from 'react';


class SingleTutorCard extends Component {
    render() {
        return (
            <div className='TutorCard'>
                <p>{this.props.name}</p>
            </div>
        );
    }
}



export default SingleTutorCard;



                    // {this.props.major}
                    // {this.props.year}
                    // {this.props.hoursTaught}...