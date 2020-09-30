import React, {Component} from 'react';
import FootageThumbnail from '../FootageThumbnail/FootageThumbnail';
import './FootageBalloon.scss';

class FootageBalloon extends Component {


    render () {
        return (
            <div className={ this.props.show ? "FootageBalloon" : "FootageBalloon hidden"}>
                <div className="triangle"></div>
                {
                    this.props.data.map(
                        (goal,index) => goal.footage
                                            ? <FootageThumbnail data={goal} key={index}></FootageThumbnail>
                                            : ''
                    )
                }
            </div>
        );
    }
}

export default FootageBalloon;