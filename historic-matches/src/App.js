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
    this.state = { match: rawData.matches[0], activeThumbnail:0 };
    this.selectMatch = this.selectMatch.bind(this);
    this.sidebarScrollUp = this.sidebarScrollUp.bind(this);
    this.sidebarScrollDown = this.sidebarScrollDown.bind(this);
  }

  selectMatch (newState, index) {
    this.setState({
      match: newState,
      activeThumbnail: index
    });
  }

  sidebarScrollUp () {
    console.log("up");
    window.scroll({
      top: 100,
      behavior: 'smooth'
    });
  }

  sidebarScrollDown () {
    console.log("down");
    window.scroll({
      bottom: 100,
      behavior: 'smooth'
    });
  }

  getFootage () {
    
  }

  render () {
    return (
      <div className="App" >
        <div className="sidebar">
          <SidebarArrow onClick={this.sidebarScrollUp}></SidebarArrow>
          <div className="sidebar-main hideScrollBar">
            {
              rawData.matches.map(
                (match, index) => <MatchThumbnail active={this.state.activeThumbnail === index} data={match} key={index} onClick={() => this.selectMatch(match, index)}></MatchThumbnail>
              )
            }
          </div>
          <SidebarArrow onClick={this.sidebarScrollDown}></SidebarArrow>
        </div>
        <div className="main">
          <MatchHeader data={this.state.match} footageClick={this.getFootage}></MatchHeader>
          <section className="match-data">
            <SquadList data={this.state.match.teams[0]}></SquadList>
            <ResultDisplay data={this.state.match}></ResultDisplay>
            <SquadList data={this.state.match.teams[1]}></SquadList>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
