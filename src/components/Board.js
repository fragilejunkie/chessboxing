import React, { Component } from 'react';

class Board extends Component {
  state = { 
    rows : [1,2,3,4,5,6,7,8] ,
    cols : ["A","B","C","D","E","F","G","H"]
  }
  
  // style = {
  //   darkCell : "darkCell" ,
  //   lightCell : "lightCell"
  // }

  makeBoard(rows, cols) {

    const board = rows.map( row => {
      cols.map( col => {
        console.log(col + row);
      })
    })
    return board
  }
  
  render() {
    console.log(this.state.rows)

    

    this.makeBoard(this.state.rows, this.state.cols)
    return (

      

      <div>
        {/* {rows, cols = this.state} */}
          <h1>board</h1>
      </div>
      
      );
    }
  }
  
  export default Board;