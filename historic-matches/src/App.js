import React from 'react';
import './App.scss';
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';
import SidebarArrow from './Components/SidebarArrow/SidebarArrow';

function App() {
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
        a
      </div>
    </div>
  );
}

export default App;
