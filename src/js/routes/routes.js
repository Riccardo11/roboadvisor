import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Overview from '../pages/overview.js';
import Holdings from '../pages/holdings.js';
import Transactions from '../pages/transactions.js';
import Performance from '../pages/performance.js';
import AssetAllocation from '../pages/assetAllocation';
import MySurvey from '../pages/survey.js';
import Surveys from '../pages/surveys.js';
import SurveyResult from '../pages/surveyResult.js';


class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Overview} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/holdings" component={Holdings} />
                <Route exact path="/transactions" component={Transactions} />
                <Route exact path="/performance" component={Performance} />
                <Route exact path="/assetallocation" component={AssetAllocation} />
                <Route exact path="/mysurvey" component={MySurvey} />
                {/*<Route exact path="/surveys" component={Surveys} />
                <Route exact path="/surveyresult" component={SurveyResult} />*/}
            </Switch>
        );
    }
}

export default Routes