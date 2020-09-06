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
                <div className="player">
                    <p className="player-number">12</p>
                    <p className="player-name">Quim</p>
                    <p className="player-icons">
                        <img src={goal} alt="Goal icon" />
                        <img src={assist} alt="Assist icon" />
                        <img src={ownGoal} alt="Own goal icon" />
                        <img src={penalty} alt="Penalty icon" />
                        <img src={redCard} alt="Red card icon" />
                        <img src={yellowCard} alt="Yellow card icon" />
                        <img src={subbedIn} alt="Subbed in icon" />
                        <img src={subbedOut} alt="Subbed out icon" />
                    </p>
                </div>
                <div className="player">
                    <p className="player-number">22</p>
                    <p className="player-name">Nélson</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">4</p>
                    <p className="player-name">Luisão</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">33</p>
                    <p className="player-name">Ricardo Rocha</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">11</p>
                    <p className="player-name">Miguelito</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">6</p>
                    <p className="player-name">Petit</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">8</p>
                    <p className="player-name">Kostas Katsouranis</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">25</p>
                    <p className="player-name">Nuno Assis</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">21</p>
                    <p className="player-name">Nuno Gomes</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">30</p>
                    <p className="player-name">Fabrizio Miccoli</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">20</p>
                    <p className="player-name">Simão Sabrosa</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">31</p>
                    <p className="player-name">Marcelo Moretto</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">3</p>
                    <p className="player-name">Anderson Beraldo</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">13</p>
                    <p className="player-name">Alcides</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">19</p>
                    <p className="player-name">Andrei Karyaka</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">26</p>
                    <p className="player-name">Georgios Karagounis</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">15</p>
                    <p className="player-name">Paulo Jorge</p>
                    <p className="player-icons"></p>
                </div>
                <div className="player">
                    <p className="player-number">9</p>
                    <p className="player-name">Pedro Mantorras</p>
                    <p className="player-icons">
                        <img src={goal} alt="Goal icon" />
                        <img src={assist} alt="Assist icon" />
                        <img src={ownGoal} alt="Own goal icon" />
                        <img src={penalty} alt="Penalty icon" />
                        <img src={redCard} alt="Red card icon" />
                        <img src={yellowCard} alt="Yellow card icon" />
                        <img src={subbedIn} alt="Subbed in icon" />
                        <img src={subbedOut} alt="Subbed out icon" />
                    </p>
                </div>
            </div>
        );
    }
}

export default SquadList;