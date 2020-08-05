import React, { useContext } from 'react';
import { useImmerReducer } from 'use-immer';

import Player from '../Player/Player.model';
import Slot from '../Slot/Slot.model';

export const GameContext = React.createContext(null);

const initialState = {
  playerOne: new Player('1', 'Player 1', undefined, 30, 5000),
  playerTwo: new Player('2', 'Player 2', undefined, 30, 5000),
  board: [
    [
      new Slot('15'),
      new Slot('16'),
      new Slot('17'),
      new Slot('18'),
      new Slot('19'),
      new Slot('20'),
      new Slot('21'),
    ],
    [
      new Slot('8'),
      new Slot('9'),
      new Slot('10'),
      new Slot('11'),
      new Slot('12'),
      new Slot('13'),
      new Slot('14'),
    ],
    [
      new Slot('1'),
      new Slot('2'),
      new Slot('3'),
      new Slot('4'),
      new Slot('5'),
      new Slot('6'),
      new Slot('7'),
    ],
  ],
};

export function GameProvider({ children }) {
  const [state, dispatch] = useImmerReducer(initialState);

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

export function useGame() {
  const game = useContext(GameContext);

  return game;
}
