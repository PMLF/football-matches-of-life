import React, {Component} from "react";
import "./ResultDisplay.scss";
import GoalScorerList from "../GoalScorerList/GoalScorerList";
import PenaltiesList from "../PenaltiesList/PenaltiesList";
import ExtraInformation from "../ExtraInformation/ExtraInformation";

class ResultDisplay extends Component {

    
    render () {
        return (
            <div className="ResultDisplay">
                <GoalScorerList data={ this.props.data.teams[0].goals }></GoalScorerList>
                <div className="result">
                    <p>
                        <span className="home-goals">{ this.props.data.teams[0].goals ? this.props.data.teams[0].goals.length : 0 }</span>
                        -
                        <span className="away-goals">{ this.props.data.teams[1].goals ? this.props.data.teams[1].goals.length : 0 }</span>
                    </p>
                </div>
                <GoalScorerList data={ this.props.data.teams[1].goals }></GoalScorerList>
                {
                    this.props.data.teams[0].penalties && this.props.data.teams[1].penalties
                        ? <div className="penalties">
                            <PenaltiesList data={this.props.data.teams[0].penalties}></PenaltiesList>
                            <PenaltiesList data={this.props.data.teams[1].penalties}></PenaltiesList>
                          </div>
                        : ''
                }
                <ExtraInformation data={this.props.data}></ExtraInformation>
            </div>
        );
    }
}

export default ResultDisplay;