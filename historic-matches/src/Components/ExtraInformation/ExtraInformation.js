import React, {Component} from "react";
import "./ExtraInformation.scss";
import league from "../../images/bwinliga.png";

class ExtraInformation extends Component {

    render () {
        return (
            <div className="ExtraInformation">
                <p className="stadium">Estádio da Luz, Lisboa, Portugal</p>
                <section className="league">
                    <img src={league} alt="League logo" />
                    <p>Liga Bwin</p>
                </section>
                <p className="date">06 novembro de 2006</p>
                <p className="season">2006/07</p>
            </div>
        );
    }
}

export default ExtraInformation;