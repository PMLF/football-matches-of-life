import React, {Component} from "react";
import "./GoalScorerList.scss";
import Goal from "../Goal/Goal";

class GoalScorerList extends Component {

    
    render () {
        return (
            <div className="GoalScorerList">
                {
                    this.props.data 
                        ? this.props.data.map(
                                goal => <Goal scorer={goal.scorer} minute={goal.minute}></Goal>
                            )
                        : ''
                }
            </div>
        );
    }
}

export default GoalScorerList;