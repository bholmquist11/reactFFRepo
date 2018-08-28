import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import SingleTextEntry from './SingleTextEntry';

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const fields = this.props.fields;

        const fieldList = fields.map((fieldData) => {
            const fieldValue = document.getElementById(fieldData.fieldId).value;

            const fieldName = fieldData.fieldId;

            const fieldFinal = {
                name: fieldName,
                value: fieldValue,
            };

            return fieldFinal;
        });

        this.props.grabFormData(fieldList);
        this.props.switchStage(this.props.newStage);
    }

    render() {
        const fields = this.props.fields;

        let fieldJSX = '';

        fieldJSX = fields.map((fieldInfo, index) => {
            return (<SingleTextEntry
                key={index}
                fieldLabel={fieldInfo.fieldLabel}
                fieldId={fieldInfo.fieldId} />
            );
        });

        return (
            <Form horizontal={true}>
                {fieldJSX}
                <FormGroup>
                    <Col smOffset={1} sm={10}>
                        <Button type='submit' onClick={this.handleClick}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}


export default ComposeForm;