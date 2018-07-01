import React, { Component } from 'react';

class Button extends Component {
    handleClick() {
        console.log('This was clicked native to button comp')
    }

    render() {
        return (
            <button onClick={this.handleClick} style={{ fontSize: this.props.fontSize, fontWeight:600 }}>
                {this.props.text}
            </button>
        );
    }
}


export default Button;