import React, { Component } from 'react';

class Board extends Component {
  state = {
    rows: [1, 2, 3, 4, 5, 6, 7, 8],
    cols: ["A", "B", "C", "D", "E", "F", "G", "H"]
  }

  makeBoard(rows, cols) {
    const board = []
    rows.map(row => {
      cols.map(col => {
        board.push(row + col)
      })
    })
    return board;
  }

  render() {
    const board = this.makeBoard(this.state.rows, this.state.cols);

    return (
      <div>
        {
          board.map(cell => {
            return <div>{cell}</div>
          })
        }
      </div>
    );
  }
}

export default Board;