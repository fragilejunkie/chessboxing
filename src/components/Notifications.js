import React, { Component } from 'react';

class Notifications extends Component {
  state = { notificationMessage : "This is working" }

  styles = { notificationStyle : "alert" }

  render() {
    return (
      <div id="ui" className={this.styles.notificationStyle}>
      <h2>{this.state.notificationMessage}</h2>
    </div>
    );
  }
}

export default Notifications;