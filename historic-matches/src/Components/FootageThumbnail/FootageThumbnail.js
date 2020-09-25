import React, {Component} from 'react';
import './FootageThumbnail.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'

class FootageThumbnail extends Component {


    render () {
        return (
            <a className="FootageThumbnail" href={this.props.data.footage}>
                <img src={this.props.data.image} alt="Goal image" />
                <FontAwesomeIcon icon={faPlay} className="play-icon"></FontAwesomeIcon>
            </a>
        );
    }
}

export default FootageThumbnail;