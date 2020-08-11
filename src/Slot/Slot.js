import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withResizeDetector } from 'react-resize-detector';

import { Card } from '../Card/Card';
import CardModel from '../Card/Card.model';

import './Slot.css';

export function Slot({ slot, targetRef = null, height = 0, width = 0 }) {
  const [cardDimensions, setCardDimensions] = useState({ height, width });

  useEffect(() => {
    function computeCardDimensions() {
      let cardHeight;
      let cardWidth;

      if (height >= width) {
        cardWidth = (10 * width) / 14;
        cardHeight = (14 * cardWidth) / 10;
      } else {
        cardWidth = (10 * height) / 14;
        cardHeight = (14 * cardWidth) / 10;
      }

      return {
        height: cardHeight,
        width: cardWidth,
      };
    }

    setCardDimensions(computeCardDimensions());
  }, [height, width]);

  return (
    <li
      ref={targetRef}
      id={slot.id}
      className="slot"
      onClick={() => {}}
      onKeyPress={() => {}}
    >
      {slot.card ? <Card card={slot.card} dimensions={cardDimensions} /> : null}
    </li>
  );
}

export const SlotWithDetector = withResizeDetector(Slot);

export const slotShape = {
  id: PropTypes.string.isRequired,
  card: PropTypes.instanceOf(CardModel),
};

Slot.propTypes = {
  slot: PropTypes.shape(slotShape).isRequired,
};
