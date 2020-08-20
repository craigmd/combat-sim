import React, { useContext, useEffect } from 'react';
import { useImmer } from 'use-immer';

import { TURN } from './Turn.constants';

const TurnContext = React.createContext(null);

const initialState = {
  phase: TURN.head,
};

export function TurnProvider({ children }) {
  const [turn, setTurn] = useImmer(initialState);
  const [subscribers, setSubscribers] = useImmer([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTurn((draft) => {
        if (draft.phase.data.timeRemaining === 0) {
          clearInterval(timer);
          draft.phase = draft.phase.next;
        } else {
          draft.phase.data.timeRemaining -= 1000;
        }
      });
    }, 1000);

    subscribers.forEach((subscriber) => subscriber(turn.phase.data.name));

    return () => clearInterval(timer);
  }, [turn.phase.data.name]);

  function subscribe(subscriber) {
    setSubscribers((draft) => {
      draft.push(subscriber);
    });

    return (subscriber) => {
      setSubscribers((draft) => {
        draft.splice(draft.indexOf(subscriber), 1);
      });
    };
  }

  return (
    <TurnContext.Provider value={{ turn, subscribe }}>
      {children}
    </TurnContext.Provider>
  );
}

export function useTurn() {
  const value = useContext(TurnContext);

  return value;
}
