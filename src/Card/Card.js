import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFistRaised,
  faShieldAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import CardModel from './Card.model';

import './Card.css';

export function Card({ card, dimensions }) {
  const { type, name, cost, imageSrc, text, attack, health } = card;

  return (
    <article className={classNames('card', type)} style={dimensions}>
      <header>
        <h3>{name}</h3>
        <span className="stat">
          <FontAwesomeIcon icon={faClock} />
          {cost}
        </span>
      </header>
      <section className="card-image-container">
        <img src={imageSrc} alt={name} />
      </section>
      <section className="card-text-container">
        <p>{text}</p>
      </section>
      <footer>
        {attack ? (
          <span className="stat">
            {attack} <FontAwesomeIcon icon={faFistRaised} />
          </span>
        ) : null}
        {health ? (
          <span className="stat">
            <FontAwesomeIcon icon={faShieldAlt} />
            {health}
          </span>
        ) : null}
      </footer>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel),
};
