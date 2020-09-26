import React, {Component} from 'react';
import FootageThumbnail from '../FootageThumbnail/FootageThumbnail';
import './FootageBalloon.scss';

class FootageBalloon extends Component {


    render () {
        return (
            <div className={ this.props.show ? "FootageBalloon" : "FootageBalloon hidden"}>
                <div className="triangle"></div>
                {
                    this.props.data.teams.map(
                        team => {
                            return team.goals
                                ? team.goals.map(
                                        (goal,index) => <FootageThumbnail data={goal} key={index}></FootageThumbnail>
                                    )
                                : ''
                        }
                    )
                }
            </div>
        );
    }
}

export default FootageBalloon;