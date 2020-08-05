import React from 'react';

import { Board } from '../Board/Board';

import './Game.css';
import { Player } from '../Player/Player';

export function Game() {
  const game = useGame();

  return (
    <main className="game">
      <Player player={game.playerTwo} />
      <Board board={game.board} />
      <Player player={game.playerOne} />
    </main>
  );
}
