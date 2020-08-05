import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game/Game';

import './index.css';
import { GameProvider } from './Game/GameProvider';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <Game />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
