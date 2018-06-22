import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class DropdownComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: "Select Account" };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(eventKey, event) {
		this.setState({
			text: event.target.text
		});
		if (this.props.getInfo) {
			this.props.getInfo(eventKey,event);
		}
	}

	render() {
		return(
			<DropdownButton
				id={'selectaccount'}
				bsStyle={'success'}
				title={this.state.text}
			>
				<MenuItem eventKey="0" onSelect={this.handleClick}> All Accounts </MenuItem>
				<MenuItem eventKey="1" onSelect={this.handleClick}> Account A </MenuItem>
				<MenuItem eventKey="2" onSelect={this.handleClick}> Account B </MenuItem>
			</DropdownButton>
		);
	}
}

export default DropdownComponent;