import React, { Component } from 'react';


class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // "Necessary to make 'this' work in callback..." uhh ok
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));

    }

    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}


export default Toggle;