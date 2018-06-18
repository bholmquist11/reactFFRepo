import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'

function ManyWelcomes() {
    return(
        <div>
            <Welcome language='Spanish' />
            <Welcome language='Japanese' />
            <Welcome language='Chichewa' />
        </div>
    )
}


export default ManyWelcomes;