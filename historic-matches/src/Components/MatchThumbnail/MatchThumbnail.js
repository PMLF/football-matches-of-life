import React, {Component} from 'react';
import './MatchThumbnail.scss';
import ResultThumbnail from '../ResultThumbnail/ResultThumbnail';

class MatchThumbnail extends Component {


    render() {
        return (
            <div className="MatchThumbnail">
                <img src="https://i.pinimg.com/originals/5a/93/25/5a932518772c4212677ed86ed9ea416d.png" alt="Home team logo" />
                <img src="https://upload.wikimedia.org/wikipedia/it/2/2d/Logo_FFF_%282018%29.png" alt="Away team logo" />
                <ResultThumbnail/>
            </div>
        );
    }
}

export default MatchThumbnail;
