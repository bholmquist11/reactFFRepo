import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import MultiTextEntry from './MultiTextEntry.js';


class OneTimeExpensesForm extends Component {
    constructor(props) {
        super(props);

        this.buildForm = this.buildForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Pull data from the form fields in DOM
        const fields = this.props.fields;

        const fieldList = fields.map((fieldData) => {
            const expenseValue = document.getElementById(fieldData.fieldId1).value;

            const expenseDate = document.getElementById(fieldData.fieldId2).value;

            const fieldName = fieldData.fieldLabel;

            const fieldFinal = {
                name: fieldName,
                value: expenseValue,
                date: expenseDate,
            };

            return fieldFinal;
        });

        // Before, we passed the data to grabFormData which updated state individually
        // this.props.grabFormData(fieldList);  // Always pass a function. Process data, yes, but also do you want to render something new?

        // Now, we want to structure the data into a single object and then setState in parent
        const oneTimeExpensesObjectTemp = {};

        for (const key in fieldList) {
            const tempData = fieldList[key];

            oneTimeExpensesObjectTemp[tempData.name] = tempData.value;
        }

        this.props.setOneTimeExpensesState({ oneTimeExpensesObject: oneTimeExpensesObjectTemp });
        this.props.postClickRender();
    }

    buildForm(fieldsInfo) {
        const formRowList = fieldsInfo.map((field) => {
            const fieldLabel = field.fieldLabel;

            const fieldId1 = field.fieldId1;

            const fieldId2 = field.fieldId2;

            const fieldJSX = (<MultiTextEntry
                key={fieldLabel}
                fieldLabel={fieldLabel}
                fieldId1={fieldId1}
                fieldId2={fieldId2} />);

            return fieldJSX;
        });

        return formRowList;
    }

    render() {
        const fieldJSX = this.buildForm(this.props.fields);

        return (
            <Form horizontal={true}>
                <FormGroup>
                    <Col sm={4} />
                    <Col sm={3}>Expense Value</Col>
                    <Col sm={3}>Expense Date</Col>
                </FormGroup>
                {fieldJSX}
                <FormGroup>
                    <Col smOffset={2}>
                        <Button type='submit' onClick={this.handleClick}>Submit One-Time Expenses</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default OneTimeExpensesForm;