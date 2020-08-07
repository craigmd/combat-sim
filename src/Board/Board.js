import React from 'react';
import PropTypes from 'prop-types';

import { Zone } from '../Zone/Zone';

import './Board.css';

export function Board({ board }) {
  return (
    <section className="board">
      {board.map((zone, i) => (
        <Zone key={i} zone={zone} />
      ))}
    </section>
  );
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
};
