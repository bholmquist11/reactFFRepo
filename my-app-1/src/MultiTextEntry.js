import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';


class MultiTextEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(event) {
        const formInput = event.target.value;

        this.setState({
            value1: formInput,
        });
    }

    handleChange2(event) {
        const formInput = event.target.value;

        this.setState({
            value2: formInput,
        });
    }

    render() {
        return (
            <FormGroup>
                <Col lg={2}>
                    <ControlLabel>{this.props.fieldLabel}</ControlLabel>
                </Col>
                <Col lg={3}>
                    <FormControl
                        id={this.props.fieldId1}
                        type='text'
                        value={this.state.value1}
                        onChange={this.handleChange1} />
                </Col>
                <Col lg={3}>
                    <FormControl
                        id={this.props.fieldId2}
                        type='text'
                        value={this.state.value2}
                        onChange={this.handleChange2} />
                </Col>
            </FormGroup>
        );
    }
}


export default MultiTextEntry;