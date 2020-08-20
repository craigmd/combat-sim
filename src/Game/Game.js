import React from 'react';

import { Board } from '../Board/Board';
import { Player } from '../Player/Player';
import { useBoard } from '../Board/BoardProvider';
import { usePlayers } from '../Player/PlayersProvider';

import './Game.css';

export function Game() {
  const { players } = usePlayers();
  const { board } = useBoard();

  return (
    <main className="game">
      <Player player={players.two} />
      <Board board={board} />
      <Player player={players.one} />
    </main>
  );
}
