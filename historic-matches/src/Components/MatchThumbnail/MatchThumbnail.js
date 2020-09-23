import React, {Component} from 'react';
import './MatchThumbnail.scss';
import ResultThumbnail from '../ResultThumbnail/ResultThumbnail';

class MatchThumbnail extends Component {

    render() {
        return (
            <div className="MatchThumbnail" onClick={this.props.onClick}>
                <img src={ this.props.data.teams[0].logo } alt="Home team logo" />
                <img src={ this.props.data.teams[1].logo } alt="Away team logo" />
                <ResultThumbnail data={ this.props.data }></ResultThumbnail>
            </div>
        );
    }
}

export default MatchThumbnail;
