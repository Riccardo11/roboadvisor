import React from 'react';
import {Grid, Row, Col, Collapse} from 'react-bootstrap';
import ANAGRAPHIC_SURVEY from '../surveys/anagraphicSurvey.js';
// import MIFID_SURVEY from '../surveys/mifidSurvey.js';



const ANAGRAPHIC_FIELDS = ["age", "gender", "job", "civil_state", "children", "privacy"];


// TODO!!!! INSERIRE DUE DOMANDE MANCANTI!!
const RADIO_NAMES = [
    ["servizi_1",
    "dossier_1",
    "gestito_1",
    "trasmissioni_1",
    "online_1"],
    ["str_gen_1",
    "str_mon_1",
    "str_obbl_1",
    "str_az_1",
    "str_fin_1",
    "futures_1"],
    ["servizi_2",
    "dossier_2",
    "gestito_2",
    "trasmissioni_2",
    "online_2"],
    ["str_gen_2",
    "str_mon_2",
    "str_obbl_2",
    "str_az_2",
    "str_fin_2",
    "futures_2"]
];

const RISK_PROFILES_PERCENTAGES = [
    [
        [[5,   15,  20,  25,  35],
         [35,  25,  20,  15,  5]],
                        
        [[5,   15,  20,  25,  35],
         [35,  25,  20,  15,  5]],
                        
        [[5,  15,  20,  25,  35],
         [35,  25,  20,  15,  5]],
                        
        [[5,   15,  20,  25,  35],
         [35,  25,  20,  15,  5]],
                        
        [[5,   15,  20,  25,  35],
         [35,  25,  20,  15,  5]]
    ],

    [
        [[0, 0, 0, 0, 0],
         [80, 20, 0, 0, 0]],

        [[50, 30, 20, 0, 0],
         [0, 0, 0, 0, 0]],

        [[10, 35, 30, 15, 0],
        [0, 0, 0, 0, 0]],

        [[0, 20, 30, 40, 10],
        [0, 0, 0, 0, 0]],

        [[0, 0, 30, 35, 35],
        [0, 0, 0, 0, 0]],

        [[0, 0, 0, 40, 60],
        [0, 0, 0, 0, 0]],

        [[0, 0, 0, 25, 75],
        [0, 0, 0, 0, 0]]
    ],

    [
        [[5, 15, 20, 25, 35],
        [35, 25, 20, 15, 5]],

        [[5, 15, 20, 25, 35],
        [35, 25, 20, 15, 5]],

        [[5, 15, 20, 25, 35],
        [35, 25, 20, 15, 5]],

        [[5, 15, 20, 25, 35],
        [35, 25, 20, 15, 5]],

        [[5, 15, 20, 25, 35],
        [35, 25, 20, 15, 5]]
    ],

    [
        [[0, 0, 0, 0, 0],
        [80, 20, 0, 0, 0]],

        [[50, 30, 20, 0, 0],
        [0, 0, 0, 0, 0]],

        [[10, 35, 30, 15, 0],
        [0, 0, 0, 0, 0]],

        [[0, 20, 30, 40, 10],
        [0, 0, 0, 0, 0]],

        [[0, 0, 30, 35, 35],
        [0, 0, 0, 0, 0]],

        [[0, 0, 0, 40, 60],
        [0, 0, 0, 0, 0]],

        [[0, 0, 0, 25, 75],
        [0, 0, 0, 0, 0]]
    ]
]


const RISK_PROFILES = () => {
    let risk_profiles = {};
    RADIO_NAMES.forEach( (nameList) => {
        nameList.forEach( (name) => {
            risk_profiles[name] = 
            {
                Si: RISK_PROFILES_PERCENTAGES[i][0],
                No: RISK_PROFILES_PERCENTAGES[i][1]
            }
        });
    } );
    return risk_profiles;
};

const WEIGHT1 = 2;
const WEIGHT2 = 4;

function getIndexOfAnswer(SiNo) {
    return (SiNo == "Si" ? 0 : 1);
}


function getSurveyId(section) {
    switch(section) {
        case 0:
            return "anagraphic_survey";
        case 1:
            return "section 1_1";
        case 2:
            return "section 1_2";
        case 3:
            return "section 2_1";
        case 4:
            return "section 2_2";
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
        case 2:
            return  <Row className="show-grid"> 
                        <h2 className='survey_section'> Sezione 1 </h2>
                        <h4> <strong> Conoscenza dei servizi di investimento (nel corso degli ultimi 3 anni) </strong> </h4>
                    </Row>;
        case 3:
            return <Row className="show-grid"> 
                        <h2 className='survey_section'> Sezione 2 </h2>
                        <h4> <strong> Esperienza nei servizi di investimento (nel corso degli ultimi 3 anni) </strong> </h4>
                    </Row>;
        case 4:
            return <Row className="show-grid"> 
                        <h2 className='survey_section'> Sezione 2 </h2>
                        <h4> <strong> Esperienza nei servizi di investimento (nel corso degli ultimi 3 anni) </strong> </h4>
                    </Row>;
        default:
            alert("boh");
    }
}

class Surveys extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = { section: 0 };
        // ANAGRAPHIC_FIELDS.map(function (field) {
        //     this.state[field] = "";
        // }.bind(this));

        console.log(RISK_PROFILES_PERCENTAGES.length);
        console.log(RADIO_NAMES.map((elem) => {return elem.length}).reduce((a,b) => a+b, 0));
        
        this.calcAnswersPoints = this.calcAnswersPoints.bind(this);
        this.calcProfilePoints = this.calcProfilePoints.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.MIFID_SURVEY_S1_1 = <div>
                                    <label>
                                        Servizi legati alla consulenza in materia di investimento
                                    </label>
                                    <br />
                                    <input type="radio" name="servizi" value="Sì" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="servizi" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Conti correnti con dossier titoli
                                    </label>
                                    <br />
                                    <input type="radio" name="dossier" value="Sì" required/> Sì
                                    <br />
                                    <input type="radio" name="dossier" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Investimenti in strumenti del risparmio gestito (Fondi, ETF, Gestioni etc)
                                    </label>
                                    <br />
                                    <input type="radio" name="gestito" value="Sì" required/> Sì
                                    <br />
                                    <input type="radio" name="gestito" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Trasmissioni di ordini di acquisto e vendita di strumenti finanziari su deposito amministrato
                                    </label>
                                    <br />
                                    <input type="radio" name="trasmissioni" value="Sì" required/> Sì
                                    <br />
                                    <input type="radio" name="trasmissioni" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Servizi informatici offerti dagli intermediari per i propri investimenti (Online banking, trading online)?
                                    </label>
                                    <br />
                                    <input type="radio" name="online" value="Sì" required/> Sì
                                    <br />
                                    <input type="radio" name="online" value="No" required/> No
                                    <br />
                                    <br />

                                    <input type="submit" value="Procedi" />

                                </div>;

        this.MIFID_SURVEY_S1_2 = <div>
                                <label>
                                    Conoscenza di strumenti finanziari generica
                                </label>
                                <br />
                                <input type="radio" name="str_gen" value="Si" onChange={this.handleChange} required/> Sì
                                <br />
                                <input type="radio" name="str_gen" value="No" onChange={this.handleChange} required/> No
                                <br />
                                <br />

                                <Collapse in={this.state.str_gen == "Si"}>
                                <div>
                                    <label>
                                        Strumenti monetari (es. Buoni Ordinari del Tesoro, Fondi monetari)
                                    </label>
                                    <br />
                                    <input type="radio" name="str_mon" value="Si" required/> Sì
                                    <br />
                                    <input type="radio" name="str_mon" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Strumenti obbligazionari corporate/societari (Es. Obbligazioni bancarie, Obbligazioni Enel, Eni, Fondi obbligazionari corporate.)
                                    </label>
                                    <br />
                                    <input type="radio" name="str_obbl" value="Si" required/> Sì
                                    <br />
                                    <input type="radio" name="str_obbl" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Strumenti azionari (Azioni quotate in Borsa, Fondi bilanciati o azionari)
                                    </label>
                                    <br />
                                    <input type="radio" name="str_az" value="Si" required/> Sì
                                    <br />
                                    <input type="radio" name="str_az" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Strumenti finanziari complessi (obbligazionari con componente strutturata, warrant, convertibili)
                                    </label>
                                    <br />
                                    <input type="radio" name="str_fin" value="Si" required/> Sì
                                    <br />
                                    <input type="radio" name="str_fin" value="No" required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Contratti Futures, opzioni, swap e altri strumenti derivati
                                    </label>
                                    <br />
                                    <input type="radio" name="futures" value="Si" required/> Sì
                                    <br />
                                    <input type="radio" name="futures" value="No" required/> No
                                    <br />
                                    <br />

                                </div>
                                </Collapse>
                                <input type="submit" value="Procedi" />
                            </div>;
    }

    calcAnswersPoints() {
        const pointsState = {}

        RADIO_NAMES.forEach( (nameList, indexList) => {

            nameList.forEach( (name, indexName) => {

                const ans = getIndexOfAnswer(this.state[name]);

                pointsState[name + "_points"] = RISK_PROFILES_PERCENTAGES[indexList][indexName][ans].map( (perc) => {
                                                    if (indexList == 3) {
                                                        return perc/100*WEIGHT2;
                                                    } else {
                                                        return perc/100*WEIGHT1; 
                                                    }
                                                });
            });
        });
        this.setState(
            pointsState, () => {
                const profilePoints = this.calcProfilePoints();

                // compute the total score of the first section of the SURVEY (not the React state section)
                const totalSection1 = profilePoints[0].map((score,i) => {
                    return score + profilePoints[1][i];
                });

                // compute the total score of the first section of the SURVEY (not the React state section)
                const totalSection2 = profilePoints[2].map((score,i) => {
                    return score + profilePoints[3][i];
                });

                // compute the score obtained from section 1 and section 2
                const section1_2Profile = totalSection1.map((score,i) => {
                    return score + totalSection2[i];
                })

                console.log(section1_2Profile);

                // compute the profile risk
                const profileRisk = section1_2Profile.indexOf(Math.max.apply(Math,section1_2Profile)) + 1;
                this.setState({
                    profileRisk: profileRisk
                })
                this.props.setPage(7,profileRisk);
            }
        );
    }

    // Compute scores summing all the answers
    calcProfilePoints() {
        // iterate over all the name sections
        return RADIO_NAMES.map( (nameList, indexList) => {            
            // same number of profiles
            let sumOfScores = [0, 0, 0, 0, 0];

            // iterate over all actual names of one section
            nameList.forEach( (name, indexList) => {

                // check every score per profile risk
                let i;
                for (i=0; i<5; i++) {
                    sumOfScores[i] += this.state[name + "_points"][i];
                }
            });
            return sumOfScores;
        });
    }

    handleChange(event) {

        let newState = {};

        newState[event.target.name] = event.target.value;

        this.setState(
            newState
        , () => console.log(this.state)) ;
        

    }

    handleSubmit(event) {

        event.preventDefault();

        if (this.state.age < 18 || this.state.age > 100) {
            alert("Inserire un'età valida");
        } else if (this.state.children < 0) {
            alert("Inserire un numero di figli valido");
        } else {
            // all the answers are inside the entries of formdata
            // store them into the DB
            const formdata = new FormData(event.target);

            switch(this.state.section) {
                case 0:
                    // index obtained analyzing the anagraphic answers
                    const anagraphicIndex = 1;
                    this.setState({ section: 1 });
                    break;
                case 1:
                case 2:
                case 3:
                    this.setState({ section: this.state.section+1 });
                    break;
                default:
                    this.setState({ section: this.state.section+1 });
                    this.calcAnswersPoints();
                    break;
            }
        }
    }

    render() {
        switch (this.state.section) {
            case 0:
                return (
                    <Grid>
                        <Col>
                            {getHeader(this.state.section)}
                            <form id={getSurveyId(this.state.section)} onSubmit={this.handleSubmit}>
                                <div>
                                    <label className="component">
                                        Età:
                                    </label>
                                        <br />
                                        <input type="number" name={ANAGRAPHIC_FIELDS[0]} onChange={this.handleChange} required/>
                                    <br />

                                    <label className="component">
                                        Sesso:
                                    </label>
                                        <br />
                                        <input type="radio" name={ANAGRAPHIC_FIELDS[1]} value="male" onChange={this.handleChange} required />
                                        Uomo
                                        <br />
                                        <input type="radio" name={ANAGRAPHIC_FIELDS[1]} value="female" onChange={this.handleChange} required />
                                        Donna
                                    <br />

                                    <label className="component">
                                        Professione:
                                    </label>
                                        <br />
                                        <input type="text" name={ANAGRAPHIC_FIELDS[2]} onChange={this.handleChange} required />
                                    <br />

                                    <label className="component">
                                        Stato Civile:
                                    </label>
                                        <br />
                                        <input type="text" name={ANAGRAPHIC_FIELDS[3]} onChange={this.handleChange} required/>
                                    <br />
                                    
                                    <label className="component">
                                        Figli:
                                    </label>
                                        <br />
                                        <input type="number" name={ANAGRAPHIC_FIELDS[4]} onChange={this.handleChange} required/>
                                    <br />

                                    <input type="radio" name={ANAGRAPHIC_FIELDS[5]} value="privacy" onChange={this.handleChange} required />
                                    Consenso alla privacy
                                    <br />

                                    <input type="submit" value="Prosegui" />
                                </div>
                            </form>
                        </Col>
                    </Grid>

                );

            case 1:
                return (
                    <Grid>
                        <Col>
                            {getHeader(this.state.section)}
                            <form id={getSurveyId(this.state.section)} onSubmit={this.handleSubmit}>
                                <div>
                                    <label>
                                        Servizi legati alla consulenza in materia di investimento
                                    </label>
                                    <br />
                                    <input type="radio" name="servizi_1" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="servizi_1" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Conti correnti con dossier titoli
                                    </label>
                                    <br />
                                    <input type="radio" name="dossier_1" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="dossier_1" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Investimenti in strumenti del risparmio gestito (Fondi, ETF, Gestioni etc)
                                    </label>
                                    <br />
                                    <input type="radio" name="gestito_1" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="gestito_1" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Trasmissioni di ordini di acquisto e vendita di strumenti finanziari su deposito amministrato
                                    </label>
                                    <br />
                                    <input type="radio" name="trasmissioni_1" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="trasmissioni_1" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Servizi informatici offerti dagli intermediari per i propri investimenti (Online banking, trading online)?
                                    </label>
                                    <br />
                                    <input type="radio" name="online_1" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="online_1" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <input type="submit" value="Procedi" />

                                </div>
                            </form>
                        </Col>
                    </Grid>
                );

            case 2:
                return (
                    <Grid>
                        <Col>
                            {getHeader(this.state.section)}
                            <form id={getSurveyId(this.state.section)} onSubmit={this.handleSubmit}>
                                <div> </div> <div>
                                    <label>
                                        Conoscenza di strumenti finanziari generica
                                    </label>
                                    <br />
                                    <input type="radio" name="str_gen_1" value="Si" onChange={this.handleChange} required /> Sì
                                    <br />
                                    <input type="radio" name="str_gen_1" value="No" onChange={this.handleChange} required /> No
                                    <br />
                                    <br />

                                    <Collapse in={this.state.str_gen_1 == "Si"}>
                                    <div>
                                        <label>
                                            Strumenti monetari (es. Buoni Ordinari del Tesoro, Fondi monetari)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_mon_1" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_mon_1" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti obbligazionari corporate/societari (Es. Obbligazioni bancarie, Obbligazioni Enel, Eni, Fondi obbligazionari corporate.)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_obbl_1" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_obbl_1" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti azionari (Azioni quotate in Borsa, Fondi bilanciati o azionari)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_az_1" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_az_1" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti finanziari complessi (obbligazionari con componente strutturata, warrant, convertibili)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_fin_1" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_fin_1" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Contratti Futures, opzioni, swap e altri strumenti derivati
                                        </label>
                                        <br />
                                        <input type="radio" name="futures_1" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="futures_1" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                    </div>
                                    </Collapse>
                                    <input type="submit" value="Procedi" />
                                </div>
                            </form>
                        </Col>
                    </Grid>
                );
            case 3:
                return (
                    <Grid>
                        <Col>
                            {getHeader(this.state.section)}
                            <form id={getSurveyId(this.state.section)} onSubmit={this.handleSubmit}>
                                <div>
                                    <label>
                                        Servizi legati alla consulenza in materia di investimento
                                    </label>
                                    <br />
                                    <input type="radio" name="servizi_2" value="Si" onChange={this.handleChange} required /> Sì
                                    <br />
                                    <input type="radio" name="servizi_2" value="No" onChange={this.handleChange} required /> No
                                    <br />
                                    <br />


                                    <label>
                                        Conti correnti con dossier titoli
                                    </label>
                                    <br />
                                    <input type="radio" name="dossier_2" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="dossier_2" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Investimenti in strumenti del risparmio gestito (Fondi, ETF, Gestioni etc)
                                    </label>
                                    <br />
                                    <input type="radio" name="gestito_2" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="gestito_2" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Trasmissioni di ordini di acquisto e vendita di strumenti finanziari su deposito amministrato
                                    </label>
                                    <br />
                                    <input type="radio" name="trasmissioni_2" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="trasmissioni_2" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <label>
                                        Servizi informatici offerti dagli intermediari per i propri investimenti (Online banking, trading online)?
                                    </label>
                                    <br />
                                    <input type="radio" name="online_2" value="Si" onChange={this.handleChange} required/> Sì
                                    <br />
                                    <input type="radio" name="online_2" value="No" onChange={this.handleChange} required/> No
                                    <br />
                                    <br />

                                    <input type="submit" value="Procedi" />
                                </div>
                            </form>
                        </Col>
                    </Grid>
                );
            case 4:
                return (
                    <Grid>
                        <Col>
                            {getHeader(this.state.section)}
                            <form id={getSurveyId(this.state.section)} onSubmit={this.handleSubmit}>
                                <div> </div> <div>
                                    <label>
                                        Ha sottoscritto qualche strumento?
                                    </label>
                                    <br />
                                    <input type="radio" name="str_gen_2" value="Si" onChange={this.handleChange} required /> Sì
                                    <br />
                                    <input type="radio" name="str_gen_2" value="No" onChange={this.handleChange} required /> No
                                    <br />
                                    <br />

                                    <Collapse in={this.state.str_gen_2 == "Si"}>
                                    <div>
                                        <label>
                                            Strumenti monetari (es. Buoni Ordinari del Tesoro, Fondi monetari)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_mon_2" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_mon_2" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti obbligazionari corporate/societari (Es. Obbligazioni bancarie, Obbligazioni Enel, Eni, Fondi obbligazionari corporate.)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_obbl_2" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_obbl_2" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti azionari (Azioni quotate in Borsa, Fondi bilanciati o azionari)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_az_2" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_az_2" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Strumenti finanziari complessi (obbligazionari con componente strutturata, warrant, convertibili)
                                        </label>
                                        <br />
                                        <input type="radio" name="str_fin_2" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="str_fin_2" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                        <label>
                                            Contratti Futures, opzioni, swap e altri strumenti derivati
                                        </label>
                                        <br />
                                        <input type="radio" name="futures_2" value="Si" onChange={this.handleChange} /> Sì
                                        <br />
                                        <input type="radio" name="futures_2" value="No" onChange={this.handleChange} /> No
                                        <br />
                                        <br />

                                    </div>
                                    </Collapse>
                                    <input type="submit" value="Procedi" />
                                </div>
                            </form>
                        </Col>
                    </Grid>
                );
            default:
                return "Grazie per la compilazione."
        }
    }
}

export default Surveys