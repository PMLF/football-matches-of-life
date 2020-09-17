import React, {Component} from "react";
import "./SquadList.scss";
import goal from "../../images/goal.png";
import assist from "../../images/assist.png";
import ownGoal from "../../images/owngoal.png";
import penalty from "../../images/penalty.png";
import redCard from "../../images/redcard.png";
import yellowCard from "../../images/yellowcard.png";
import subbedIn from "../../images/subbedin.png";
import subbedOut from "../../images/subbedout.png";

class SquadList extends Component {


    render () {
        return (
            <div className="SquadList">
                {
                    this.props.data.map(
                        player =>
                            <div className="player">
                                <p className="player-number">{player.number}</p>
                                <p className="player-name">{player.name}</p>
                                <p className="player-icons">
                                    {
                                        player.red_card
                                            ? <img src={redCard} alt="Red card icon" />
                                            : ''
                                    }
                                    <img src={goal} alt="Goal icon" />
                                    <img src={assist} alt="Assist icon" />
                                    <img src={ownGoal} alt="Own goal icon" />
                                    <img src={penalty} alt="Penalty icon" />
                                    
                                    <img src={yellowCard} alt="Yellow card icon" />
                                    <img src={subbedIn} alt="Subbed in icon" />
                                    <img src={subbedOut} alt="Subbed out icon" />
                                </p>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default SquadList;