import React, {Component} from 'react';
import './ResultThumbnail.scss';

class ResultThumbnail extends Component {


    render() {
        return (
            <div className="ResultThumbnail">
                <p>
                    <span>
                        {
                            this.props.data.teams[0].goals ? this.props.data.teams[0].goals.length : 0
                        }
                    </span>
                    -
                    <span>
                        {
                            this.props.data.teams[1].goals ? this.props.data.teams[1].goals.length : 0
                        }
                    </span>
                </p>
            </div>
        );
    }
}

export default ResultThumbnail;
