import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PlayerModel from './Player.model';

import './Player.css';

export function Player({ player }) {
  const { name, deckSize, turnTimer } = player;

  return (
    <section className="player">
      <div className="player-field">
        <FontAwesomeIcon icon="user" />
        <span>{name}</span>
      </div>
      <div className="player-field">
        <FontAwesomeIcon icon="layerGroup" />
        <span>{deckSize}</span>
      </div>
      <div className="player-field">
        <FontAwesomeIcon icon="clock" />
        <span>{turnTimer}</span>
      </div>
    </section>
  );
}

Player.propTypes = {
  player: PropTypes.instanceOf(PlayerModel),
};
