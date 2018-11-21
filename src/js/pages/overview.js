import React from 'react';
import {Table, DropdownButton, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import navChart from '../charts/lineChart.js';
import rendimentiTrimestraliChart from '../charts/rendimentiTrimestrali.js';
import rendimentiVolatilitaChart from '../charts/rendimentiVolatilita.js';
import perditaMassimaStoricaChart from '../charts/perditaMassimaStorica.js';
// import extraRendimentoChart from '../charts/extraRendimento.js';
import IEXClass from '../iex/iex.js';

const NAVMESSAGE = "Click this line to see the NAV";

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            account: '',
            nav: NAVMESSAGE,
            my_chart: null,  // needed to destroy the previous chart when another one is created
            maxdrawdown: '',
            amount_of_data: "1",
            dropdown_text: "Andamento per intero"
        };
        this.handleClickNav = this.handleClickNav.bind(this);
        this.handleClickAmount = this.handleClickAmount.bind(this);        
        this.updateNavData = this.updateNavData.bind(this);

    }

    updateNavData(nav,maxdrawdown,myChart) {
        this.setState({
            nav: nav,
            maxdrawdown: maxdrawdown,
            my_chart: myChart
        });
    }

    handleClickNav(event) {
        this.setState({
                account: event.target.parentNode.firstChild.textContent,
                dropdown_text: "Andamento per intero", 
                amount_of_data: "1"
            },
            () => {
                // chart here
                if (this.state.my_chart) this.state.my_chart.destroy()
                navChart(this.state.account, this.updateNavData, this.state.amount_of_data);
                rendimentiTrimestraliChart()
                rendimentiVolatilitaChart()
                perditaMassimaStoricaChart()
                // extraRendimentoChart()
                console.log(this.state.account);
            }
        );
    }

    handleClickAmount(eventKey, event) {
        this.setState({
            amount_of_data: eventKey,
            dropdown_text: event.target.text
        },
        () => {
            console.log(this.state.my_chart)
            if (this.state.my_chart) {
                console.log("ciao");
                this.state.my_chart.destroy();
            }
            navChart(this.state.account, this.updateNavData, this.state.amount_of_data);

        });
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

                  <tbody onClick={this.handleClickNav}> 
                    <tr className={this.state.account == 'A' ? 'selected-nav-account' : ''}>                
                      <td>A</td>
                      <td>Personal Account</td>
                      <td>123456</td>
                      <td>{this.state.account == 'A' ? this.state.nav : NAVMESSAGE}</td>
                    </tr>
                    
                    {/*<tr className={this.state.account == 'B' ? 'selected-nav-account' : ''}>
                      <td>B</td>
                      <td>IRA</td>
                      <td>654321</td>
                      <td>{this.state.account == 'B' ? this.state.nav : NAVMESSAGE}</td>
                    </tr>*/}
                  </tbody>
                </Table>

                <div className={"component " + (this.state.account == '' ? "hidden" : "visible")}>
                    <DropdownButton 
                        id="select_period"
                        bsStyle="default"
                        title={this.state.dropdown_text}
                    >
                        <MenuItem eventKey="1" onSelect={this.handleClickAmount}> Andamento per intero </MenuItem>
                        <MenuItem eventKey="2" onSelect={this.handleClickAmount}> Ultimo mese </MenuItem>
                        <MenuItem eventKey="3" onSelect={this.handleClickAmount}> Ultimi sei mesi </MenuItem>
                        <MenuItem eventKey="4" onSelect={this.handleClickAmount}> Ultimo anno </MenuItem>
                    </DropdownButton>
                </div>


                <Grid>
                    <Row style={{backgroundColor: '#eef9f8'}}>
                        <Col md={9}>
                            <div className={"component maxdrawdown " + (this.state.maxdrawdown =='' ? 'hidden' : 'visible')}> 
                                Maximum Drawdown: {this.state.maxdrawdown}%
                            </div>

                            <canvas id="nav-chart" className={'component ' + (this.state.maxdrawdown=='' ? 'hidden' : 'visible')}>
                            </canvas>
                        </Col>
                        <Col md={3}>
                            <div className={'component ' + (this.state.account=='' ? 'hidden' : 'visible')}>
                                <Table striped bordered>
                                    <thead>
                                        <tr>
                                            <th>
                                                Analisi Comparativa
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>  </th>
                                            <th> Nav </th>
                                        </tr>
                                        <tr>
                                            <th> Performance </th>
                                            <td> -0,668 </td>
                                        </tr>
                                        <tr>
                                            <th> Volatilità </th>
                                            <td> 16,727 </td>
                                        </tr>
                                        <tr>
                                            <th> Ind. Sharpe </th>
                                            <td> -0,001 </td>
                                        </tr>
                                        <tr>
                                            <th> TEV </th>
                                            <td> 9,272 </td>
                                        </tr>
                                        <tr>
                                            <th> Alfa </th>
                                            <td> -0,0633 </td>
                                        </tr>
                                        <tr>
                                            <th> Beta </th>
                                            <td> 1,2159 </td>
                                        </tr>
                                        <tr>
                                            <th> Correlazione </th>
                                            <td> 0,846 </td>
                                        </tr>
                                        <tr>
                                            <th> Info Ratio </th>
                                            <td> -0,090 </td>
                                        </tr>
                                        <tr>
                                            <th> Recovery period (gg) </th>
                                            <td> 26 </td>
                                        </tr>                                        

                                    </thead>
                                    <tbody>
                                        <tr>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <canvas id="rend-chart" className={'component ' + (this.state.account == '' ? 'hidden' : 'visible')}>
                            </canvas>
                        </Col>
                        <Col md={6}>
                            <canvas id="rend-vol-chart" className={'component '+ (this.state.account == '' ? 'hidden' : 'visible')}>
                            </canvas>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <canvas id="perdita-chart" className={'component '+ (this.state.account == '' ? 'hidden' : 'visible')}>
                            </canvas>
                        </Col>
                    </Row>
                    {/*<Row>
                        <Col>
                            <canvas id="extra-rend-chart" className={'component '+ (this.state.account == '' ? 'hidden' : 'visible')}>
                            </canvas>
                        </Col>
                    </Row>*/}
                </Grid>
            </div>
        );
    }
}

export default Overview;