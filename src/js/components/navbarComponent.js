import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import RiskTolerance from '../../icons/RiskTolerance.png';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';
// import Routes from '../routes/routes.js'

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pageActive: props.pageActive};
        this.changePage = this.changePage.bind(this);
    }

    changePage(i) {
        this.setState({
            pageActive: i
        });
        this.props.setPage(i);
    }

    render() {
        return (
                <div>
                    <Navbar onSelect={this.changePage}>
                        <Nav>
                            {/*<LinkContainer to="/overview" exact={true}>*/}
                                <NavItem eventKey={4}> 
                                    <div className={(this.props.getPage() == 4) ? 'selected-navigation-item' : ''}>
                                        <strong>Questionario</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/assetallocation" exact={true}>*/}
                                <NavItem eventKey={1}> 
                                    <div className={(this.props.getPage() == 1) ? 'selected-navigation-item' : ''}>
                                        <strong>Asset Allocation</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/transactions" exact={true}>*/}
                                <NavItem eventKey={2}> 
                                    <div className={(this.props.getPage() == 2) ? 'selected-navigation-item' : ''}>
                                        <strong>Transazioni</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/performance" exact={true}>*/}
                                <NavItem eventKey={3}> 
                                    <div className={(this.props.getPage() == 3) ? 'selected-navigation-item' : ''}>
                                        <strong>Rendimenti</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                                <NavItem eventKey={0}> 
                                    <div className={(this.props.getPage() == 0) ? 'selected-navigation-item' : ''}>
                                        <strong>Reportistica</strong>
                                    </div>
                                </NavItem>
                        </Nav>
                    </Navbar>

                    
                </div>
        );
    }
}

export default NavbarComponent