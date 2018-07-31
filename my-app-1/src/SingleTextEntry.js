import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';


class SingleTextEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const formInput = event.target.value;

        this.setState({
            value: formInput,
        });
    }

    render() {
        return (
            <FormGroup>
                <Col componentClass={ControlLabel} lg={2}>
                    {this.props.fieldLabel}
                </Col>
                <Col lg={4}>
                    <FormControl
                        id={this.props.fieldId}
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange} />
                </Col>
            </FormGroup>
        );
    }
}


export default SingleTextEntry;