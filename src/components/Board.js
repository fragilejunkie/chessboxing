import React, { Component } from 'react';

class Board extends Component {
  state = {
    rows: [1, 2, 3, 4, 5, 6, 7, 8],
    cols: ["A", "B", "C", "D", "E", "F", "G", "H"],
    activeCell: null
  }

  makeBoard(rows, cols) {
    const board = []
    rows.map(row => {
      cols.map(col => {
        board.push(row + "-" + col)
      })
    })

    return board;
  }


  render() {

    const board = this.makeBoard(this.state.cols, this.state.rows);



    return (
      <div id="board">
        {
          board.map((cell, i) => {
            return <div
              key={cell}
              id={cell}
              className={`cell ${(this.props.activeCell == cell ? 'active' : '')}`}
              onClick={this.props.handleClick}></div>
          })
        }
      </div>
    );

  }
}

export default Board;