import React from 'react';
import './App.css';

import Notifications from './components/Notifications';
import Board from './components/Board';
import Info from './components/Info';


function App() {
  
  return (
    <div id="content">
      <Info />
      <Board />
      <Notifications />
    </div>
  );
}

export default App;
