import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import myChart from '../charts/pieChart.js';
import profile1Chart from '../charts/profile1.js';
import profile2Chart from '../charts/profile2.js';
import profile3Chart from '../charts/profile3.js';
import profile4Chart from '../charts/profile4.js';
import profile5Chart from '../charts/profile5.js';
import CompareProfile from '../charts/compareProfile.js';

class SurveyResult extends React.Component {
    constructor(props) {
        super(props);
        const cp = new CompareProfile(14,20,29,36);
        this.mostSimilarProfile = cp.getMostSimilarProfile();

        this.translateChanges = this.translateChanges.bind(this);
        
        this.changes =
        (this.props.riskProfile == this.mostSimilarProfile)
        ? "Nessuna azione necessaria" : this.translateChanges(cp.getDifferenceFromProfile(this.props.riskProfile));

    }

    translateChanges(changes) {
        let stringChanges = "";
        changes.forEach( (change, i) =>  {
            switch(i) {
                case 0:
                    change >= 0 ? 
                    (stringChanges += "+" + change + "% -> Bond") : 
                    (stringChanges += change + "% -> Bond")
                    stringChanges += " | "
                    break;
                case 1:
                    change >= 0 ? 
                    (stringChanges += "+" + change + "% -> Equity") : 
                    (stringChanges += change + "% -> Equity")
                    stringChanges += " | "
                    break;
                case 2:
                    change >= 0 ? 
                    (stringChanges += "+" + change + "% -> Cash") : 
                    (stringChanges += change + "% -> Cash")
                    stringChanges += " | "
                    break;
                case 3:
                    change >= 0 ? 
                    (stringChanges += "+" + change + "% -> High Yields") : 
                    (stringChanges += change + "% -> High Yields")
                    stringChanges += " | "
                    break;
                default:
                    alert("problem in translating changes");
            }
        });
        return stringChanges;
    }

    componentDidMount() {
        myChart("Il Mio Account", true);
        profile1Chart();
        profile2Chart();
        profile3Chart();
        profile4Chart();
        profile5Chart();

    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <div className="component">
                            Allo stato attuale questo è il suo portafoglio
                        </div>
                        <div>
                            <canvas id="pie-chart">
                            </canvas>
                        </div>
                    </Col>
                    <Col>
                        <div className="bordered">
                            <div className="component">
                                Il profilo di rischio dedotto dal questionario è il numero 
                                <strong>{" " + this.props.riskProfile}</strong>
                                <br />
                                Il profilo più simile a quello identificato dal suo portafoglio
                                è il numero <strong> {" " + this.mostSimilarProfile} </strong>
                                <br />
                                Per allineare il portafoglio compiere le seguenti azioni:
                                <div className="bordered"> <strong> {this.changes} </strong> </div>
                            </div>

                            <div className="component">
                                <canvas id="profile1_chart">
                                </canvas>
                            </div>

                            <div className="component">
                                <canvas id="profile2_chart">
                                </canvas>
                            </div>

                            <div className="component">
                                <canvas id="profile3_chart">
                                </canvas>
                            </div>

                            <div className="component">
                                <canvas id="profile4_chart">
                                </canvas>
                            </div>

                            <div className="component">
                                <canvas id="profile5_chart">
                                </canvas>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default SurveyResult;