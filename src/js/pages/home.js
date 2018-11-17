import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RiskTolerance from '../../icons/RiskTolerance.png';
import PortfolioOptimization from '../../icons/PortfolioOptimization.png';
import FrontEnd from '../../icons/FrontEnd.png';



class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={4}>
                        <a>
                            <img className='grow' onClick={() => this.props.setPage(4)} src={RiskTolerance} width="100%"/>
                        </a>
                    </Col>
                    <Col md={4}>
                        <img className='grow' onClick={() => this.props.setPage(1)} src={PortfolioOptimization} width="100%" />
                    </Col>
                    <Col md={4}>
                        <img className='grow' onClick={() => this.props.setPage(0)} src={FrontEnd} width="100%" />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home