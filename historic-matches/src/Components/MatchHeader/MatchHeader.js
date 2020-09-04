import React, {Component} from 'react';
import './MatchHeader.scss';

class MatchHeader extends Component {

    render() {
        return (
            <section className="MatchHeader">
                <img src="https://i.pinimg.com/originals/5a/93/25/5a932518772c4212677ed86ed9ea416d.png" alt="Home team logo" />
                <div className="footage">
                    <p>Images</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/it/2/2d/Logo_FFF_%282018%29.png" alt="Away team logo" />
            </section>
        );
    }
}

export default MatchHeader;