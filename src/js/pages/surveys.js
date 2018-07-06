import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ANAGRAPHIC_SURVEY from '../surveys/anagraphicSurvey.js';
import MIFID_SURVEY from '../surveys/mifidSurvey.js';

function getSurvey(section) {
    switch(section) {
        case 0:
            return "anagraphic_survey";
        case 1:
            return "section 1";
        default:
            alert( "boh");
    }
}

function getHeader(section) {
    switch(section) {
        case 0:
            return <h1> Benvenuto! </h1>;
        case 1:
            return  <Row className="show-grid"> 
                        <h2 className='survey_section'> Sezione 1 </h2>
                        <h4> <strong> Conoscenza dei servizi di investimento (nel corso degli ultimi 3 anni) </strong> </h4>
                    </Row>;
        default:
            alert("boh");
    }
}

class Surveys extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { section: 0 };
        // FIELDS.map(function (field) {
        //     this.state[field] = "";
        // }.bind(this));

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     let newState = {};
    //     newState[event.target.name] = event.target.value;

    //     this.setState(
    //         newState
    //     );

    //     console.log(this.state);
    // }

    handleSubmit(event) {

        event.preventDefault();
        
        // all the answers are inside the entries of formdata
        // store them into the DB
        const formdata = new FormData(event.target);

        if (this.state.section == 0) {
            // index obtained analyzing the anagraphic answers
            const anagraphicIndex = 1;
            this.setState({ section: 1 });
        }
            

    }

    render() {
        return (
            <Grid>
                <Col>
                    {getHeader(this.state.section)}
                    <form id={getSurvey(this.state.section)} onSubmit={this.handleSubmit}>
                        {this.state.section == 0 ? ANAGRAPHIC_SURVEY : MIFID_SURVEY}
                    </form>
                </Col>
            </Grid>
        );
    }
}

export default Surveys