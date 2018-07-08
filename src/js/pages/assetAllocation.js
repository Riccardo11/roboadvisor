import React from 'react';
import DropdownComponent from '../components/dropdownComponent.js';
import myChart from '../charts/pieChart.js';

class AssetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { account: '' };
        this.getAccount = this.getAccount.bind(this);

    }

    getAccount(eventKey, event) {
        this.setState(
            {
                account: event.target.text
            },
            () => {                             // second parameter for setState: callback when state updated
                myChart(this.state.account, false);
            }
        );
    }

    render() {
        return (
            <div>
                <div className="component">
                    <DropdownComponent getInfo={this.getAccount} />
                </div>
                <canvas id="pie-chart" className={'component ' + (this.state.account=='' ? 'hidden' : 'visible')}>
                </canvas>
            </div>
        );
    }
}

export default AssetAllocation;