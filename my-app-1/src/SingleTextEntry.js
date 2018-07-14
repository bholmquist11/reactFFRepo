import React, { Component } from 'react';

class SingleTextEntry extends Component {
    render() {
        return (
            <div>
                <label>{this.props.fieldTitle}:</label>
                <input type='text' name={this.props.fieldName} /><br />
            </div>
        );
    }
}


export default SingleTextEntry;