import React, {Component} from "react";
import "./ResultDisplay.scss";
import GoalScorerList from "../GoalScorerList/GoalScorerList";
import ExtraInformation from "../ExtraInformation/ExtraInformation";

class ResultDisplay extends Component {

    
    render () {
        return (
            <div className="ResultDisplay">
                <GoalScorerList />
                <div className="result">
                    <p>
                        <span className="home-goals">1</span>
                        -
                        <span className="away-goals">0</span>
                    </p>
                </div>
                <GoalScorerList />
                <ExtraInformation />
            </div>
        );
    }
}

export default ResultDisplay;