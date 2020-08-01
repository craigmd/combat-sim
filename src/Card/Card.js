import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CardModel from './Card.model';

import './Card.css';

export function Card({ card }) {
  const { type, name, cost, imageSrc, text, attack, health } = card;

  return (
    <article className={classNames('card', type)}>
      <header>
        <h3>{name}</h3>
        <span>{cost}</span>
      </header>
      <section className="card-image-container">
        <img src={imageSrc} alt={name} />
      </section>
      <section className="card-text-container">
        <p>{text}</p>
      </section>
      <footer>
        {attack ? <span>{attack}</span> : null}
        {health ? <span>{health}</span> : null}
      </footer>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel),
};
