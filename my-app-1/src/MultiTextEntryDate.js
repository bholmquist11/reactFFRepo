import 'react-datepicker/dist/react-datepicker.css';

import { Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class MultiTextEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2: '',
            startDate: moment(),
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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

    handleDateChange(date) {
        this.setState({
            startDate: date,
        });
    }

    render() {
        return (
            <FormGroup>
                <Col xs={12} lg={2}>
                    <ControlLabel>{this.props.fieldLabel}</ControlLabel>
                </Col>
                <Col xs={12} lg={3}>
                    <FormControl
                        id={this.props.fieldId1}
                        type='text'
                        value={this.state.value1}
                        onChange={this.handleChange1} />
                </Col>
                <Col xs={12} lg={3}>
                    <FormControl
                        id={this.props.fieldId2}
                        type='text'
                        value={this.state.value2}
                        onChange={this.handleChange2} />
                </Col>
                <Col xs={12} lg={3}>
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleDateChange} />
                </Col>
            </FormGroup>
        );
    }
}


export default MultiTextEntry;