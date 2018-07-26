import React, { Component } from 'react';
import MultiTextEntry from './MultiTextEntry';
import SingleTextEntry from './SingleTextEntry';

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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

        this.props.grabFormData(fieldList);  // Always pass a function. Process data, yes, but also do you want to render something new?
        this.props.postClickRender();
    }

    render() {
        const fields = this.props.fields;

        let elements = '';

        if (Object.keys(fields[0]).length === 2) {
            elements = fields.map((fieldInfo, index) => {
                return (<SingleTextEntry
                    key={index}
                    fieldLabel={fieldInfo.fieldLabel}
                    fieldName={fieldInfo.fieldName} />
                );
            });
        } else if (Object.keys(fields[0]).length === 3) {
            elements = fields.map((fieldInfo, index) => {
                return (<MultiTextEntry
                    key={index}
                    fieldLabel={fieldInfo.fieldLabel}
                    fieldName1={fieldInfo.fieldName1}
                    fieldName2={fieldInfo.fieldName2} />
                );
            });
        }

        return (
            <div>
                {elements}
                <button onClick={this.handleClick}>
                    Submit
                </button>
            </div>
        );
    }
}


export default ComposeForm;