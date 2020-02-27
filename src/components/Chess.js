import React, { Component } from 'react';

import Notifications from './Notifications';
import Board from './Board';
import Info from './Info';

class Chess extends Component {
  state = {
    position: null
  }

  handleClick = (e) => {
    this.setState({ position: e.target.id })
  }

  render() {
    return (
      <div id="content">
        <Info position={this.state.position} />
        <Board activeCell={this.state.position} handleClick={this.handleClick} />
        <Notifications />
      </div>
    );

  }
}

export default Chess;