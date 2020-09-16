import React, {Component} from 'react';
import './MatchHeader.scss';

class MatchHeader extends Component {

    render() {
        return (
            <section className="MatchHeader">
                <img src={this.props.data.teams[0].logo} alt="Home team logo" />
                <div className="footage">
                    <p>Images</p>
                </div>
                <img src={this.props.data.teams[1].logo} alt="Away team logo" />
            </section>
        );
    }
}

export default MatchHeader;