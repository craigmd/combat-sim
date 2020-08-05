import React from 'react';
import PropTypes from 'prop-types';

import './Board.css';

export function Board({ board }) {
  return (
    <section className="board">
      {board.map((zone) => (
        <Zone zone={zone} />
      ))}
    </section>
  );
}

Board.PropTypes = {
  board: PropTypes.array.isRequired,
};
