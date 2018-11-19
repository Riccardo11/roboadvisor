import React from 'react';
import {Table} from 'react-bootstrap';
import DropdownComponent from '../components/dropdownComponent.js';

class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { account: '' };
        this.getAccount = this.getAccount.bind(this);
    }

    getAccount(eventKey, event) {
        console.log(event);
        this.setState({
            account: event.target.text
        });
    }

    render() {
        return(
            <div>
                {/*<div className='component'>
                    <DropdownComponent getInfo={this.getAccount}/>
                </div>*/}
                <div>
                    <div className='table-title'>
                        <h4> Recent Account Activity </h4>
                    </div>
                    <div>
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th> Security </th>
                                    <th> Symbol </th>
                                    <th> Date of Transaction </th>
                                    <th> Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SPDR Dow Jones Intl Real Estate </td>
                                    <td>RWX</td>
                                    <td>Jan 19th, 2014</td>
                                    <td>Sell</td>
                                </tr>
                                <tr>
                                    <td>PowerShares DB Commodity Index Tracking</td>
                                    <td>DBC</td>
                                    <td>Jan 4th, 2014</td>
                                    <td>Buy</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Transactions;