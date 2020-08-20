import React from 'react';
import ReactDOM from 'react-dom';
import { setAutoFreeze } from 'immer';

import { Game } from './Game/Game';
import { TurnProvider } from './Turn/TurnProvider';
import { PlayersProvider } from './Player/PlayersProvider';
import { BoardProvider } from './Board/BoardProvider';

import './index.css';

setAutoFreeze(false);
ReactDOM.render(
  <React.StrictMode>
    <PlayersProvider>
      <BoardProvider>
        <TurnProvider>
          <Game />
        </TurnProvider>
      </BoardProvider>
    </PlayersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
