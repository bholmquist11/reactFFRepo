import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Button extends Component {
	render() {
		return(
			<button style={{fontSize: this.props.fontSize, fontWeight:600}}>
				Button {this.props.name}!
			</button>
		)
	}
}


export default Button;