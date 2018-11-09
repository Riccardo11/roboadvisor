import React from 'react';
import {DropdownButton, MenuItem, Table, Navbar, Nav, NavItem} from 'react-bootstrap';
import DropdownComponent from '../components/dropdownComponent.js'

class Holdings extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
            <div>
			<div className="component">
			 <DropdownComponent />
            </div>
            <div className="component">
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th> Security </th>
                        <th> Asset Type </th>
                        <th> Data d'acquisto </th>
                        <th> Prezzo d'acquisto </th>
                        <th> # Shares </th>
                        <th> PNL </th>
                        <th> Actual Market Value </th>
                        <th> Historical Volatility </th>
                        {/*<th> ??? </th>*/}
                        <th> Sharpe Ratio </th>
                    </tr>
                </thead>
            </Table>
            </div>
            </div>
		);
	}
}


export default Holdings;