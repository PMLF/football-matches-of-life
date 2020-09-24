import React, {Component} from 'react';
import FootageThumbnail from '../FootageThumbnail/FootageThumbnail';
import './FootageBalloon.scss';

class FootageBalloon extends Component {


    render () {
        return (
            <div className="FootageBalloon">
                <div className="triangle"></div>
                <FootageThumbnail />
            </div>
        );
    }
}

export default FootageBalloon;