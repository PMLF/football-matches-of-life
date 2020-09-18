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
    this.state = rawData.matches[0];
    this.sidebarScrollUp = this.sidebarScrollUp.bind(this);
    this.sidebarScrollDown = this.sidebarScrollDown.bind(this);
  }

  sidebarScrollUp () {
    this.setState({
      stadium:"AAA"
    });

    window.scroll({
      top: 100,
      behavior: 'smooth'
    });
  }

  sidebarScrollDown () {
    this.setState({
      stadium:"BBB"
    });
    
    window.scroll({
      bottom: 100,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div className="App" >
        <div className="sidebar">
          <SidebarArrow onClick={this.sidebarScrollUp}></SidebarArrow>
          <div className="state" >{this.state.stadium} </div>
          <div className="sidebar-main hideScrollBar">
            {
              rawData.matches.map(
                (match, index) => <MatchThumbnail data={match} key={index} onClick={this.selectMatch}></MatchThumbnail>
              )
            }
          </div>
          <SidebarArrow onClick={this.sidebarScrollDown}></SidebarArrow>
        </div>
        <div className="main">
          <MatchHeader data={this.state}></MatchHeader>
          <section className="match-data">
            <SquadList data={this.state.teams[0].squad}></SquadList>
            <ResultDisplay data={this.state.teams}></ResultDisplay>
            <SquadList data={this.state.teams[1].squad}></SquadList>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
