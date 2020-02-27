import React, { Component } from 'react';

import Notifications from './Notifications';
import Board from './Board';
import Info from './Info';

class Chess extends Component {
  state = {
    position : null
  }

  handleClick = (e) => {
    const boardCell = e.target.id;
    this.setState({position : e.target.id})
    console.log(this.state.position)
  }

  render() {
    return (
      <div id="content">
      <Info  position={this.state.position}/>
      <Board handleClick={this.handleClick} />
      <Notifications />
      </div>
      );
      
    }
  }

export default Chess;