import React, {Component} from 'react';
import './App.scss';
import $ from "jquery";
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';
import SidebarArrow from './Components/SidebarArrow/SidebarArrow';
import MatchHeader from './Components/MatchHeader/MatchHeader';
import SquadList from './Components/SquadList/SquadList';
import ResultDisplay from './Components/ResultDisplay/ResultDisplay';
import ScriptTag from 'react-script-tag';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <SidebarArrow />
          <div className="sidebar-main hideScrollBar">
            <MatchThumbnail/>
            <MatchThumbnail/>
            <MatchThumbnail/>
            <MatchThumbnail/>
            <MatchThumbnail/>
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
        <ScriptTag type="text/javascript" src="/scripts/match.js" />
      </div>
    );
  }
}

export default App;
