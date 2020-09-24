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
                <div className="manager">
                    <p className="person-id">M</p>
                    <p className="person-name">{this.props.data.manager.name}</p>
                </div>
                {
                    this.props.data.squad.map(
                        (player, index) =>
                            <div key={index} className="player">
                                <p className="person-id">{player.number}</p>
                                <p className="person-name">{player.name}</p>
                                <p className="player-icons">
                                    {
                                        player.yellowCard
                                            ? <img src={yellowCard} alt="Yellow card icon" />
                                            : ''
                                    }
                                    {
                                        player.redCard
                                            ? <img src={redCard} alt="Red card icon" />
                                            : ''
                                    }
                                    {
                                        player.subIn
                                            ? <img src={subbedIn} alt="Subbed in icon" />
                                            : ''
                                    }
                                    {
                                        player.subOut
                                            ? <img src={subbedOut} alt="Subbed out icon" />
                                            : ''
                                    }
                                    {
                                        [...Array(player.assists)].map((e, i) => <img src={assist} alt="Assist icon" key={i} />)
                                    }
                                    {
                                        [...Array(player.goals)].map((e, i) => <img src={goal} alt="Goal icon" key={i} />)
                                    }
                                    {
                                        [...Array(player.ownGoals)].map((e, i) => <img src={ownGoal} alt="Own goal icon" key={i} />)
                                    }
                                    {
                                        [...Array(player.penaltiesMissed)].map((e, i) => <img src={penalty} alt="Penalty icon" key={i} />)
                                    }
                                </p>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default SquadList;