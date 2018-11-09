import React from 'react';
import DropdownComponent from '../components/dropdownComponent.js';
import myChart from '../charts/pieChart.js';
import {Grid, Row, Col, Table} from 'react-bootstrap';

class AssetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: '',
            asset_selected: '',
            asset_color: ''
        };
        this.getAccount = this.getAccount.bind(this);
        this.updateTable = this.updateTable.bind(this);

    }


    updateTable(event, array) {
        const assetId = array[0]["_index"]
        const assetClicked = (array[0]["_chart"]["legend"]["legendItems"][assetId]["text"])
        const assetColor = (array[0]["_chart"]["legend"]["legendItems"][assetId]["fillStyle"])

        console.log(array)
        this.setState({
            asset_selected: assetClicked,
            asset_color: assetColor
        })
    }

    getAccount(eventKey, event) {
        this.setState(
            {
                account: event.target.text,
                asset_selected: '',
                asset_color: ''
            },
            () => {                             // second parameter for setState: callback when state updated
                myChart(this.state.account, false, this.updateTable);
            }
        );
    }

    render() {
        return (
            <Grid className="background">
                <Row>
                    <div>
                        <div className="component">
                            <DropdownComponent getInfo={this.getAccount} />
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={5}>
                        <div>
                            <canvas id="pie-chart" className={'component ' + (this.state.account=='' ? 'hidden' : 'visible')}>
                            </canvas>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div style={{ borderColor: this.state.asset_color, borderStyle: "solid" }}>
                            <div className={'component ' + (this.state.account=='' ? 'hidden' : 'visible')}>
                                <h4> 
                                    {(() => {
                                        if (this.state.asset_selected == '') {
                                            return "Clicca su una sezione del grafico per vedere le tue holdings";
                                        } else {
                                            return this.state.asset_selected;
                                        }
                                    })()}
                                </h4>
                            </div>
                            <div className={"component " + (this.state.asset_selected=='' ? 'hidden' : 'visible')}>
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
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AssetAllocation;