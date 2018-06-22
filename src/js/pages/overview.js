import React from 'react';
import {Table} from 'react-bootstrap';
import navChart from '../charts/lineChart.js';

const NAVMESSAGE = "Click this line to see the NAV";

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: '',
            nav: NAVMESSAGE,
            maxdrawdown: '' 
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateNavData = this.updateNavData.bind(this);
    }

    updateNavData(nav,maxdrawdown) {
        this.setState({
            nav: nav,
            maxdrawdown: maxdrawdown
        });
    }

    handleClick(event) {
        this.setState({
                account: event.target.parentNode.firstChild.textContent
            },
            () => {
                // chart here
                navChart(this.state.account, this.updateNavData);
                console.log(this.state.account);
            }
        );
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Account Owner</th>
                      <th>Account Type</th>
                      <th>Account Number</th>
                      <th>NAV</th>
                    </tr>
                  </thead>

                  <tbody onClick={this.handleClick}> 
                    <tr className={this.state.account == 'A' ? 'selected-nav-account' : ''}>                
                      <td>A</td>
                      <td>Personal Account</td>
                      <td>123456</td>
                      <td>{this.state.account == 'A' ? this.state.nav : NAVMESSAGE}</td>
                    </tr>
                    
                    <tr className={this.state.account == 'B' ? 'selected-nav-account' : ''}>
                      <td>B</td>
                      <td>IRA</td>
                      <td>654321</td>
                      <td>{this.state.account == 'B' ? this.state.nav : NAVMESSAGE}</td>
                    </tr>
                  </tbody>
                </Table>

                <div className={"component maxdrawdown " + (this.state.account=='' ? 'hidden' : 'visible')}> 
                    Maximum Drawdown: {this.state.maxdrawdown}%
                </div>

                <canvas id="nav-chart" className={'component ' + (this.state.maxdrawdown=='' ? 'hidden' : 'visible')}>
                </canvas>
            </div>
        );
    }
}

export default Overview;