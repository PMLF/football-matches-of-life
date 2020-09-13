import React, {Component} from 'react';
import './App.scss';
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';
import SidebarArrow from './Components/SidebarArrow/SidebarArrow';
import MatchHeader from './Components/MatchHeader/MatchHeader';
import SquadList from './Components/SquadList/SquadList';
import ResultDisplay from './Components/ResultDisplay/ResultDisplay';
import {rawData} from './data/matches';

class App extends Component {

  constructor(props) {
    super(props);
    this.currentMatch = rawData.matches[0]; // Initial state.
    this.selectMatch = this.selectMatch.bind(this);
  }

  selectMatch(e) {
    console.log("AAAA");
    console.log(e.target);

    this.setState({
      a: "Default state"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <SidebarArrow />
          <div className="sidebar-main hideScrollBar">
            {
              rawData.matches.map(
                match => <MatchThumbnail data={match} onClick={(e) => this.selectMatch(e)} ></MatchThumbnail>
              )
            }
          </div>
          <SidebarArrow />
        </div>
        <div className="main">
          <MatchHeader />
          <section className="match-data">
            <SquadList />
            <ResultDisplay />
            <SquadList />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
