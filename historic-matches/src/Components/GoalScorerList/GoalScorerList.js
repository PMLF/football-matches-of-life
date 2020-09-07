import React, {Component} from "react";
import "./GoalScorerList.scss";
import Goal from "../Goal/Goal";

class GoalScorerList extends Component {

    
    render () {
        return (
            <div className="GoalScorerList">
                <Goal />
                <Goal />
                <Goal />
            </div>
        );
    }
}

export default GoalScorerList;