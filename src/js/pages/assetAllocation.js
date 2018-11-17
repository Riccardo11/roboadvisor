import React from 'react';
import DropdownComponent from '../components/dropdownComponent.js';
import myChart from '../charts/pieChart.js';
import {Grid, Row, Col, Table, Collapse, Fade} from 'react-bootstrap';

class AssetAllocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: '',
            asset_selected: 'all',
            asset_color: '',
            show_details: ''
        };
        this.getAccount = this.getAccount.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.showHoldingDetail = this.showHoldingDetail.bind(this);

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
                asset_selected: 'all',
                asset_color: '',
                show_details: ''
            },
            () => {                             // second parameter for setState: callback when state updated
                myChart(this.state.account, false, this.updateTable);
            }
        );
    }

    showHoldingDetail(event) {
        this.setState({
            show_details: event.target.id
        });
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
                                        console.log(this.state.asset_selected)
                                        if (this.state.asset_selected == 'all') {
                                            return "Le tue holdings";
                                        } else {
                                            return this.state.asset_selected;
                                        }
                                    })()}
                                </h4>
                                <Row>
                                    <Col md={4}> <strong> Holdings </strong> </Col> 
                                    <Col md={4}> <strong> Current Weight </strong> </Col> 
                                    <Col md={4}> <strong> Current Value </strong> </Col> 
                                </Row>
                                <hr />
                                <div className={"component " + (((this.state.asset_selected== 'all') || (this.state.asset_selected == 'Government Bond')) ? 'visible' : 'hidden')}>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="bond-a" href="#"> Holding bond a </a> </Col> 
                                        <Col md={4}> 
                                            11% 
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(153, 255, 153)', width: '11%'}}
                                            >
                                            </span> 
                                        </Col> 
                                        <Col md={4}> 12.543.345$  </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='bond-a' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="bond-b" href="#"> Holding bond b </a> </Col> 
                                        <Col md={4}> 
                                            3%
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(153, 255, 153)', width: '3%'}}
                                            >
                                            </span> 
                                        </Col>
                                        <Col md={4}> 12.543$ </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='bond-b' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                </div>

                                <div  className={"component " + (this.state.asset_selected== 'all' || this.state.asset_selected == 'Cash' ? 'visible' : 'hidden')}>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="cash-a" href="#"> Holding cash a </a> </Col> 
                                        <Col md={4}> 
                                            9% 
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(102, 255, 255)', width: '9%'}}
                                            >
                                            </span> 
                                        </Col> 
                                        <Col md={4}> 1.254$  </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='cash-a' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="cash-b" href="#"> Holding bond b </a> </Col> 
                                        <Col md={4}> 
                                            20%
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(102, 255, 255)', width: '20%'}}
                                            >
                                            </span> 
                                        </Col>
                                        <Col md={4}> 12.543$ </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='cash-b' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                </div>

                                <div  className={"component " + (this.state.asset_selected== 'all' || this.state.asset_selected == 'High Yield' ? 'visible' : 'hidden')}>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="hy-a" href="#"> Holding HY a </a> </Col> 
                                        <Col md={4}> 
                                            13% 
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(255, 153, 204)', width: '13%'}}
                                            >
                                            </span> 
                                        </Col> 
                                        <Col md={4}> 1.254$  </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='hy-a' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="hy-b" href="#"> Holding HY b </a> </Col> 
                                        <Col md={4}> 
                                            23%
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(255, 153, 204)', width: '23%'}}
                                            >
                                            </span> 
                                        </Col>
                                        <Col md={4}> 12.543$ </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='hy-b' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                </div>

                                <div  className={"component " + (this.state.asset_selected== 'all' || this.state.asset_selected == 'Equity' ? 'visible' : 'hidden')}>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="equity-a" href="#"> Holding Equity a </a> </Col> 
                                        <Col md={4}> 
                                            15% 
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(102, 255, 255)', width: '15%'}}
                                            >
                                            </span> 
                                        </Col> 
                                        <Col md={4}> 1.254$  </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='equity-a' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                    <Row>
                                        <Col md={4} onClick={this.showHoldingDetail}> <a className="asset-item" id="equity-b" href="#"> Holding Equity b </a> </Col> 
                                        <Col md={4}> 
                                            14%
                                            <span className={"asset-bar"}
                                                  style={{backgroundColor: 'rgba(102, 255, 255)', width: '14%'}}
                                            >
                                            </span> 
                                        </Col>
                                        <Col md={4}> 12.543$ </Col> 
                                    </Row>
                                    <Collapse in={this.state.show_details=='equity-b' ? true : false}>
                                        <div>
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
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </div>
                                    </Collapse>
                                </div>

                            </div>


                                {/*<Table striped bordered condensed hover>
                                    <thead>
                                        <tr>
                                            <th> Holdings </th>
                                            <th> Current Weight </th>
                                            <th> Current Value </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Holding a </td>
                                            <td> 11% </td>
                                            <td> 12.543.345$ </td>
                                        </tr>
                                        <tr>
                                        <Collapse in={true}>
                                                <Table striped bordere condensed hover>
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
                                                            {/*<th> ??? </th>
                                                            <th> Sharpe Ratio </th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                        </Collapse>
                                        </tr>*/}
                                    {/*</tbody>
                                            <th> Security </th>
                                            <th> Asset Type </th>
                                            <th> Data d'acquisto </th>
                                            <th> Prezzo d'acquisto </th>
                                            <th> # Shares </th>
                                            <th> PNL </th>
                                            <th> Actual Market Value </th>
                                            <th> Historical Volatility </th>
                                            {/*<th> ??? </th>
                                            <th> Sharpe Ratio </th>
                                        </tr>
                                    </thead>
                                    <tbody onClick={this.showHoldingDetail}>
                                        <tr>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                            <td> Ciao </td>
                                        </tr>
                                        <Collapse in={this.state.show_details}>
                                            <tr>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                                <td> Ciao </td>
                                            </tr>
                                        </Collapse>
                                    </tbody>
                                </Table>*/}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default AssetAllocation;