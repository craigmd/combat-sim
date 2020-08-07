import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '../Card/Card';
import CardModel from '../Card/Card.model';

import './Slot.css';

export function Slot({ slot }) {
  return (
    <li id={slot.id} className="slot" onClick={() => {}} onKeyPress={() => {}}>
      {slot.card ? <Card card={slot.card} /> : null}
    </li>
  );
}

export const slotShape = {
  id: PropTypes.string.isRequired,
  card: PropTypes.instanceOf(CardModel),
};

Slot.propTypes = {
  slot: PropTypes.shape(slotShape).isRequired,
};
