import React, {Component} from "react";
import "./Goal.scss";

class Goal extends Component {

    
    render () {
        return (
            <div className="Goal">
                <p className="player-name">Kostas Katsouranis</p>
                <p className="goal-minute">52</p>
            </div>
        );
    }
}

export default Goal;