import React from 'react';

import Notifications from './Notifications';
import Board from './Board';
import Info from './Info';

function Chess() {
    return (
    <div id="content">
      <Info />
      <Board />
      <Notifications />
    </div>
    );
}

export default Chess;