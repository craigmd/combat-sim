import React from 'react';
import PropTypes from 'prop-types';

import { slotShape, SlotWithDetector } from '../Slot/Slot';

import './Zone.css';

export function Zone({ zone }) {
  return (
    <section className="zone">
      <ul className="slots">
        {zone.map((slot, i) => (
          <SlotWithDetector key={i} slot={slot} />
        ))}
      </ul>
    </section>
  );
}

Zone.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.shape(slotShape)),
};
