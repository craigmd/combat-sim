import React, { useContext } from 'react';
import { useImmer } from 'use-immer';

import Player from './Player.model';
import cards from '../cards';

const PlayersContext = React.createContext(null);

const deckOne = Array.from({ length: 30 }, () => cards.robotTest);
const deckTwo = Array.from({ length: 30 }, () => cards.abilityTest);

const initialState = {
  one: new Player('1', 'Player 1', null, deckOne, []),
  two: new Player('2', 'Player 2', null, deckTwo, []),
};

export function PlayersProvider({ children }) {
  const [players, setPlayers] = useImmer(initialState);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
}

export function usePlayers() {
  const value = useContext(PlayersContext);

  return value;
}
