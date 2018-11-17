import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import NavbarComponent from './components/navbarComponent';
import Home from './pages/home.js'
import Overview from './pages/overview.js';
import Holdings from './pages/holdings.js';
import Transactions from './pages/transactions.js';
import Performance from './pages/performance.js';
import AssetAllocation from './pages/assetAllocation';
import MySurvey from './pages/survey.js';
import Surveys from './pages/surveys.js';
import SurveyResult from './pages/surveyResult.js';

/*
const Header = () => {
    return <h1 style={{color: "#cc0000"}}> RoboAdvisor Unipd </h1>;
};
*/

// function actualPage() {
//     if (TABACTIVE= 1) {
//         return (<Holdings />);
//     }
// }


class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={5}>
                        <a href="#" onClick={() => this.props.setPage(6)}>
                            <h1 className="title"> RoboAdvisor Unipd </h1>
                        </a>
                    </Col>
                    {/*<Col sm={6} md={5}>
                                            <Button bsStyle="info" className="pull-right surveyButton"> User Survey </Button>
                                        </Col>*/}
                </Row>
            </Grid>
        );
    }
}

// // function MyButton(props) {
// //     return <MyButton>  {props.tag} </MyButton>;
// // }

// class Tag extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     handleClick() {
//         this.props.notifyClick(this.props.tabindex);
//     }

//     render() {
//         return (
//             this.props.active ?
//                 <ListGroupItem active onClick={(e) => this.handleClick(e)}>
//                     {this.props.tag} 
//                 </ListGroupItem>
//             :
//                 <ListGroupItem onClick={(e) => this.handleClick(e)}>
//                     {this.props.tag} 
//                 </ListGroupItem>
//         );
//     }
// }

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { whichActive: [true,false,false,false,false] };
//         this.notifyClick = this.notifyClick.bind(this);
//     }

//     notifyClick(indexClicked) {
//         this.setState(prevActive => ({
//             whichActive: prevActive.whichActive.map(
//                 function (el,i) {
//                     return i==indexClicked ? true : false;
//                 }) 
//             }
//         ));
//     }

//     render() {
//         return (
//         /*    <Grid>
//                 <Row className="show-grid">
//                     <Col sm={3} md={2}>*/
//                         <ListGroup>
//                             <Tag tag="Overview" tabindex='0' notifyClick={this.notifyClick} active={this.state.whichActive[0]}/>
//                             <Tag tag="Holdings/PNL" tabindex='1' notifyClick={this.notifyClick} active={this.state.whichActive[1]}/>
//                             <Tag tag="Asset Allocation" tabindex='2' notifyClick={this.notifyClick} active={this.state.whichActive[2]}/>
//                             <Tag tag="Transactions" tabindex='3' notifyClick={this.notifyClick} active={this.state.whichActive[3]}/>
//                             <Tag tag="Performance" tabindex='4' notifyClick={this.notifyClick} active={this.state.whichActive[4]}/>
//                         </ListGroup>
//        /*             </Col>
//                 </Row>
//             </Grid>*/
//         );               
//     }
// };

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {pageActive: 6};
        this.setPage = this.setPage.bind(this);
        this.PAGES = [<Overview />,
                      <AssetAllocation />, <Transactions />,
                      <Performance />,
                      <Surveys setPage={this.setPage}/>, <SurveyResult />,
                      <Home setPage={this.setPage} />]
    }

    setPage(page, riskProfile) {
        if (! isNaN(riskProfile)) {
            this.PAGES[page] = <SurveyResult riskProfile={riskProfile} />
        }
        this.setState({
            pageActive: page
        });
        console.log(this.state.pageActive);
    }

    render() {
        return(
            <div>
                <Header setPage={this.setPage}/>
                <Grid className="background">
                    <Row className={this.state.pageActive == 6 ? 'hidden' : 'visible'}>
                         {/*   <NavBar /> */}
                         <NavbarComponent setPage={this.setPage} />
                    </Row>
                    <Row className="show-grid">
                        <Col>
                            {this.PAGES[this.state.pageActive]}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );       
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('index')
);