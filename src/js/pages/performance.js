import React from 'react';
import {Table} from 'react-bootstrap';
import DropdownComponent from '../components/dropdownComponent.js';

class Performance extends React.Component {
	constructor(props) {
		super(props);
		this.state = { account: '' };
        this.getAccount = this.getAccount.bind(this);
    }

    getAccount(eventKey, event) {
        this.setState({
            account: event.target.text
        });
    }

    render() {
    	return (
    		<div>
    			<div className="component">
    				<DropdownComponent getInfo={this.getAccount} />
    			</div>
                <div className={'component ' + (this.state.account=='' ? 'hidden' : 'visible')}>
					<Table striped bordered>
						<thead>
							<tr>
								<th> Beginning Value </th>
								<td> 0.00$ </td>
							</tr>
							<tr>
								<th> Ending Value </th>
								<td> 15000.00$ </td>
							</tr>
							<tr>
								<th> Deposit </th>
								<td> 15.00$ </td>
							</tr>
							<tr>
								<th> Withdrawals</th>
								<td> 20.00$ </td>
							</tr>
							<tr>
								<th className="success"> Weekly Gain </th>
								<td className="success"> <b>10%</b> </td>
							</tr>
							<tr>	
								<th className="danger"> Monthly Gain </th>
								<td className="danger"> <b>-5%</b> </td> 
							</tr>
							<tr>	
								<th className="success"> Yearly Gain </th>
								<td className="success"> <b>8%</b> </td> 
							</tr>
						</thead>
						<tbody>
							<tr>
								
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
    	);
    }
}

export default Performance;