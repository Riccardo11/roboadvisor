import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import RiskTolerance from '../../icons/RiskTolerance.png'

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
            <Navbar onSelect={this.changePage}>
                <Nav>
                    <NavItem eventKey={0}> 
                        <div className={this.state.pageActive==0 ? 'selected-navigation-item' : ''}>
                            <strong>Overview</strong>
                        </div>
                    </NavItem>
                    <NavItem eventKey={1}> 
                        <div className={this.state.pageActive==1 ? 'selected-navigation-item' : ''}>
                            <strong>Holdings/PNL</strong>
                        </div>
                    </NavItem>
                    <NavItem eventKey={2}> 
                        <div className={this.state.pageActive==2 ? 'selected-navigation-item' : ''}>
                            <strong>Asset Allocation</strong>
                        </div>
                    </NavItem>
                    <NavItem eventKey={3}> 
                        <div className={this.state.pageActive==3 ? 'selected-navigation-item' : ''}>
                            <strong>Transactions</strong>
                        </div>
                    </NavItem>
                    <NavItem eventKey={4}> 
                        <div className={this.state.pageActive==4 ? 'selected-navigation-item' : ''}>
                            <strong>Performance</strong>
                        </div>
                    </NavItem>

                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={5}>
                        <div className={'selected-navigation-item'}>
                            <strong>User Survey</strong>
                        </div>
                    </NavItem>
                    <NavItem eventKey={6}>
                        <img src={RiskTolerance} height={35}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default NavbarComponent