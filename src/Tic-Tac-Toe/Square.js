import React from 'react';

function Square(props) {
  return (
    <button className={`square ${props.value === 'X' ? 'x' : 'o'}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
