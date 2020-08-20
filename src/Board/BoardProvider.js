import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

import Slot from '../Slot/Slot.model';

const BoardContext = React.createContext(null);

const initialState = [
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
];

export function BoardProvider({ children }) {
  const [board, setBoard] = useImmer(initialState);

  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const value = useContext(BoardContext);

  return value;
}
