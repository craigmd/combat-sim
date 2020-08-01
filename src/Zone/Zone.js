import React from 'react';
import PropTypes from 'prop-types';

import { slotShape } from '../Slot/Slot';

import './Zone.css';

export function Zone({ slots }) {
  return (
    <section className="zone">
      <ul className="slots">
        {slots.map((slot) => (
          <Slot slot={slot} />
        ))}
      </ul>
    </section>
  );
}

Zone.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.shape(slotShape)),
};
