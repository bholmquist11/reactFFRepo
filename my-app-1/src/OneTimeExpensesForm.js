import React, { Component } from 'react';
import SingleTextEntry from './SingleTextEntry.js';


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
            const fieldValue = document.getElementById(fieldData.fieldName).value;

            const fieldName = fieldData.fieldName;

            const fieldFinal = {
                name: fieldName,
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

            expensesObjectTemp[tempData.name] = tempData.value;
        }

        this.props.setExpensesState({ expensesObject: expensesObjectTemp });
        this.props.postClickRender();
    }

    buildForm(fieldsInfo) {
        const formRowList = fieldsInfo.map((field) => {
            const fieldLabel = field.fieldLabel;

            const fieldName = field.fieldName;

            const fieldJSX = (<SingleTextEntry
                key={fieldName}
                fieldLabel={fieldLabel}
                fieldName={fieldName} />);

            return fieldJSX;
        });

        return formRowList;
    }

    render() {
        const fieldJSX = this.buildForm(this.props.fields);

        return (
            <div>
                {fieldJSX}
                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}

export default OneTimeExpensesForm;