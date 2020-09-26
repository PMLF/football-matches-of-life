import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './MatchHeader.scss';
import FootageBalloon from '../FootageBalloon/FootageBalloon';

class MatchHeader extends Component {

    constructor(props) {
        super(props);
        this.state = { showFootage: false };
        this.showFootage = this.showFootage.bind(this);
    }

    showFootage () {
        console.log(this.state.showFootage);
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
                    <FootageBalloon data={this.props.data} show={this.state.showFootage}></FootageBalloon>
                </div>
                <div className="logo">
                    <img src={this.props.data.teams[1].logo} alt="Away team logo" />
                </div>
            </section>
        );
    }
}

export default MatchHeader;