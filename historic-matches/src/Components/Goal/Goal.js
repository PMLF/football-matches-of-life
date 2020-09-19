import React, {Component} from "react";
import "./Goal.scss";

class Goal extends Component {

    
    render () {
        return (
            <div className="Goal">
                <p className="goal-minute">{this.props.data.minute}</p>
                <p className="player-name">
                    {this.props.data.scorer}
                    {this.props.data.own_goal ? ' (og)' : ''}
                    {this.props.data.penalty ? ' (pen)' : ''}
                </p>
            </div>
        );
    }
}

export default Goal;