import React, { Component } from 'react';

class MultiTextEntry extends Component {
    render() {
        return (
            <div>
                <label>{this.props.fieldTitle}:</label>
                <input type='text' name={this.props.fieldName1} />
                <input type='text' name={this.props.fieldName2} /><br />
            </div>
        );
    }
}


export default MultiTextEntry;