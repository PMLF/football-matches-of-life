import React from 'react';
import './App.scss';
import MatchThumbnail from './Components/MatchThumbnail/MatchThumbnail';

function App() {
  return (
    <div className="App">

      <div className="sidebar">
        <MatchThumbnail/>
        <MatchThumbnail/>
        <MatchThumbnail/>
        <MatchThumbnail/>
        <MatchThumbnail/>
      </div>
      <div className="main">
        a
      </div>
    </div>
  );
}

export default App;
