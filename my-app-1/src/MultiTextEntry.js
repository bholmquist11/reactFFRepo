import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


class MultiTextEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const formInput = event.target.value;

        const uppercaseInput = formInput.toUpperCase();

        this.setState({
            value: uppercaseInput,
        });
    }

    render() {
        return (
            <form>
                <FormGroup controlId={this.props.fieldName1 + 'group'}>
                    <ControlLabel>{this.props.fieldLabel}</ControlLabel>
                    <FormControl
                        id={this.props.fieldName1}
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <FormControl
                        id={this.props.fieldName2}
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                </FormGroup>
            </form>
        );
    }
}


export default MultiTextEntry;