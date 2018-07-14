import React, { Component } from 'react';
import SingleTextEntry from './SingleTextEntry';
import MultiTextEntry from './MultiTextEntry';

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.handleClickSingleEntry = this.handleClickSingleEntry.bind(this);
    }

    handleClickSingleEntry() {
        const fields = this.props.fields;
        const fieldList = fields.map((fieldData, index) => {
            const fieldValue = document.getElementsByName(fieldData.fieldName)[0].value;
            const fieldName = fieldData.fieldName;
            const fieldFinal = {
                name: fieldName,
                value: fieldValue,
            };
            return fieldFinal
        })

        this.props.grabFormData(fieldList)  // Always pass a function. Process data, yes, but also do you want to render something new?
        this.props.postClickRender()
    }

    render() {
        const fields = this.props.fields;
        const fieldsLength = Object.keys(fields[0]).length
        if (Object.keys(fields[0]).length == 2) {
            var elements = fields.map((fieldInfo, index) => {
                return (<SingleTextEntry
                    key={index}
                    fieldTitle={fieldInfo.fieldTitle}
                    fieldName={fieldInfo.fieldName} />
                );
            });
        } else if (Object.keys(fields[0]).length == 3) {
            var elements = fields.map((fieldInfo, index) => {
                return (<MultiTextEntry
                    key={index}
                    fieldTitle={fieldInfo.fieldTitle}
                    fieldName1={fieldInfo.fieldName1}
                    fieldName2={fieldInfo.fieldName2} />
                );
            });
        }

        return (
            <div>
                {elements}
                <button onClick={this.handleClickSingleEntry}>
                    Submit
                </button>
            </div>
        );
    }
}


export default ComposeForm;