import React from 'react';

function Info(props) {
  
  return (
    <div id="data">
      <div className="dataTitle">
        <h3 className="position">{props.position}</h3><h1>Pawn </h1>
      </div>
      <p>Acá abajo va bastante más información, sobre por ejemplo, porque sirve este personaje.</p>
      <div id="subData">
        <p>MOV</p><p>1</p>
        <p>FUE</p><p>1</p>
        <p>DES</p><p>1</p>
        <p>SUE</p><p>1</p>
      </div>
    </div>
  )
}

export default Info;