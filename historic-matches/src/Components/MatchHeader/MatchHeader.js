import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './MatchHeader.scss';
import FootageBalloon from '../FootageBalloon/FootageBalloon';

class MatchHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { showFootage: false, goals:[] };
        this.showFootage = this.showFootage.bind(this);
    }

    orderGoals () {
        let goalList = [];
        this.props.data.teams.map(
            // eslint-disable-next-line
            team => {
                if (team.goals) {
                    team.goals.forEach(
                        goal => {
                            goalList.push(goal);
                        }
                    )
                }
            }
        )

        goalList.sort((aux1, aux2) => aux1.minute.localeCompare(aux2.minute) );
        JSON.stringify(goalList);
        return goalList;
    }

    showFootage () {
        this.setState({
            goals:this.orderGoals()
        })

        this.setState(
            this.state.showFootage
                ? { showFootage:false }
                : { showFootage:true }
        )
    }

    render() {
        return (
            <section className="MatchHeader">
                <div className="logo">
                    <img src={this.props.data.teams[0].logo} alt="Home team logo" />
                </div>
                <div className="footage" onClick={this.showFootage}>
                    <FontAwesomeIcon icon={faPlay} />
                    <p>Footage</p>
                    <FootageBalloon data={this.state.goals} show={this.state.showFootage}></FootageBalloon>
                </div>
                <div className="logo">
                    <img src={this.props.data.teams[1].logo} alt="Away team logo" />
                </div>
            </section>
        );
    }
}

export default MatchHeader;