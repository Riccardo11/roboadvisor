import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import RiskTolerance from '../../icons/RiskTolerance.png';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';
// import Routes from '../routes/routes.js'

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pageActive: 0};
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
                                <NavItem eventKey={0}> 
                                    <div className={this.state.pageActive==0 ? 'selected-navigation-item' : ''}>
                                        <strong>Overview</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/assetallocation" exact={true}>*/}
                                <NavItem eventKey={1}> 
                                    <div className={this.state.pageActive==1 ? 'selected-navigation-item' : ''}>
                                        <strong>Asset Allocation</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/transactions" exact={true}>*/}
                                <NavItem eventKey={2}> 
                                    <div className={this.state.pageActive==2 ? 'selected-navigation-item' : ''}>
                                        <strong>Transactions</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                            {/*<LinkContainer to="/performance" exact={true}>*/}
                                <NavItem eventKey={3}> 
                                    <div className={this.state.pageActive==3 ? 'selected-navigation-item' : ''}>
                                        <strong>Performance</strong>
                                    </div>
                                </NavItem>
                            {/*</LinkContainer>*/}
                        </Nav>
                    </Navbar>

                    
                </div>
        );
    }
}

export default NavbarComponent