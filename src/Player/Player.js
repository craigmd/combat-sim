import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLayerGroup,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

import PlayerModel from './Player.model';

import './Player.css';

export function Player({ player }) {
  const { name, deckSize, turnTimer } = player;

  return (
    <section className="player">
      <div className="player-field">
        <FontAwesomeIcon icon={faUser} />
        <span>{name}</span>
      </div>
      <div className="player-field">
        <FontAwesomeIcon icon={faLayerGroup} />
        <span>{deckSize}</span>
      </div>
      <div className="player-field">
        <FontAwesomeIcon icon={faClock} />
        <span>{turnTimer}</span>
      </div>
    </section>
  );
}

Player.propTypes = {
  player: PropTypes.instanceOf(PlayerModel),
};
