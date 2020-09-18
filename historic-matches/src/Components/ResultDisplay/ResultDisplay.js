import React, {Component} from "react";
import "./ResultDisplay.scss";
import GoalScorerList from "../GoalScorerList/GoalScorerList";
import ExtraInformation from "../ExtraInformation/ExtraInformation";

class ResultDisplay extends Component {

    
    render () {
        return (
            <div className="ResultDisplay">
                <GoalScorerList data={ this.props.data[0].goals ? this.props.data[0].goals : '' }></GoalScorerList>
                <div className="result">
                    <p>
                        <span className="home-goals">1</span>
                        -
                        <span className="away-goals">0</span>
                    </p>
                </div>
                <GoalScorerList data={ this.props.data[1].goals ? this.props.data[1].goals : '' }></GoalScorerList>
                <ExtraInformation />
            </div>
        );
    }
}

export default ResultDisplay;