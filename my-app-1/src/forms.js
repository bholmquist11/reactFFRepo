import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class SingleTextEntry extends Component {
    render() {
        return(
            <form>
                <label>
                    {this.props.fieldTitle}:
                    <input type="text" name={this.props.formName} /><br />
                </label>
            </form>
        )
    }
}


export default SingleTextEntry;