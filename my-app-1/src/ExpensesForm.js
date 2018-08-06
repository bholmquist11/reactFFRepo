import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import SingleTextEntry from './SingleTextEntry.js';


class ExpensesForm extends Component {
    constructor(props) {
        super(props);

        this.buildForm = this.buildForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Pull data from the form fields in DOM
        const fields = this.props.fields;

        const fieldList = fields.map((fieldData) => {
            const fieldValue = document.getElementById(fieldData.fieldId).value;

            const fieldId = fieldData.fieldLabel;

            const fieldFinal = {
                name: fieldId,
                value: fieldValue,
            };

            return fieldFinal;
        });

        // Before, we passed the data to grabFormData which updated state individually
        // this.props.grabFormData(fieldList);  // Always pass a function. Process data, yes, but also do you want to render something new?

        // Now, we want to structure the data into a single object and then setState in parent
        const expensesObjectTemp = {};

        for (const key in fieldList) {
            const tempData = fieldList[key];

            expensesObjectTemp[tempData.name] = tempData;
        }

        this.props.setExpensesState({ expensesObject: expensesObjectTemp });
        this.props.switchStage(this.props.newStage);
    }

    buildForm(fieldsInfo) {
        const formRowList = fieldsInfo.map((field) => {
            const fieldLabel = field.fieldLabel;

            const fieldId = field.fieldId;

            const fieldJSX = (<SingleTextEntry
                key={fieldId}
                fieldLabel={fieldLabel}
                fieldId={fieldId} />);

            return fieldJSX;
        });

        return formRowList;
    }

    render() {
        const fieldJSX = this.buildForm(this.props.fields);

        return (
            <Form horizontal={true}>
                {fieldJSX}
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type='submit' onClick={this.handleClick}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default ExpensesForm;