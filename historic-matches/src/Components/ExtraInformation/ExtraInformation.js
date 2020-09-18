import React, {Component} from "react";
import "./ExtraInformation.scss";

class ExtraInformation extends Component {

    render () {
        return (
            <div className="ExtraInformation">
                <p className="stadium">{this.props.data.stadium.name}, {this.props.data.stadium.city}, {this.props.data.stadium.country}</p>
                <section className="league">
                    <img src={this.props.data.competition.logo} alt="League logo" />
                    <p>{this.props.data.competition.name}</p>
                </section>
                <p className="season">{this.props.data.season}</p>
                <p className="date">{this.props.data.date}</p>
            </div>
        );
    }
}

export default ExtraInformation;