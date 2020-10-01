import React, {Component} from "react";
import "./PenaltiesList.scss";
import scored from "../../images/penaltyscored.png";
import missed from "../../images/penaltymissed.png";

class PenaltiesList extends Component {

    
    render () {
        return (
            <div className="PenaltiesList">
                {
                    this.props.data.map(
                        penalty =>
                            <div>
                                <p className="taker">{penalty.taker}</p>
                                <p className="scored">
                                    {
                                        penalty.scored
                                            ? <img src={scored} alt="Penalty scored indicator" />
                                            : <img src={missed} alt="Penalty missed indicator" />
                                    }
                                </p>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default PenaltiesList;