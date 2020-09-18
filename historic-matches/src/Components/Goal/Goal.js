import React, {Component} from "react";
import "./Goal.scss";

class Goal extends Component {

    
    render () {
        return (
            <div className="Goal">
                <p className="goal-minute">{this.props.minute}</p>
                <p className="player-name">{this.props.scorer}</p>
            </div>
        );
    }
}

export default Goal;