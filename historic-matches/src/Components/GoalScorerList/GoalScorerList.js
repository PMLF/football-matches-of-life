import React, {Component} from "react";
import "./GoalScorerList.scss";

class GoalScorerList extends Component {

    
    render () {
        return (
            <div className="GoalScorerList">
                <p className="player-name"></p>
                <p className="goal-minute"></p>
            </div>
        );
    }
}

export default GoalScorerList;