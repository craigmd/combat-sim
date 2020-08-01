import React from 'react';
import PropTypes from 'prop-types';

import CardModel from '../Card/Card.model';

import './Slot.css';

export function Slot({ slot }) {
  return (
    <li
      id={slot.id}
      className="slot"
      onClick={slot.handleClick}
      onKeyPress={slot.handleKeyPress}
    >
      {slot.card ? <Card card={card} /> : null}
    </li>
  );
}

export const slotShape = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  card: PropTypes.instanceOf(CardModel),
};

Slot.propTypes = {
  slot: PropTypes.shape(slotShape).isRequired,
};
