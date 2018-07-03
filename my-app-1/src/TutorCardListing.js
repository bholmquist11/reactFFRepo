import React, { Component } from 'react';
import SingleTutorCard from './SingleTutorCard';


const tutorData = [
    {
        name: 'Ben Holmquist',
        major: 'Aerospace Engineering',
        year: 'Senior, Undergraduate',
        hoursTaught: '23',
    },
    {
        name: 'Kate Schelonka',
        major: 'Economics',
        year: 'Senior, Undergraduate',
        hoursTaught: '27',
    },
];


class TutorCardListing extends Component {
    render() {
        const tutorDataJSX = tutorData.map(
            (tutor) => {
                return (<SingleTutorCard
                    key={tutor.name}
                    name={tutor.name}
                    major={tutor.major}
                    year={tutor.year}
                    hoursTaught={tutor.hoursTaught} />
                );
            });


        return (
            <div>
                {tutorDataJSX}
            </div>
        );
    }
}


export default TutorCardListing;