import { CircularLinkedList } from './CircularLinkedList';

const PHASES = [
  { name: 'MAIN_BEGIN', timeRemaining: 1000 },
  { name: 'MAIN', timeRemaining: 7000 },
  { name: 'COMBAT_BEGIN', timeRemaining: 1000 },
  { name: 'COMBAT', timeRemaining: 3000 },
  { name: 'DRAW_BEGIN', timeRemaining: 1000 },
  { name: 'DRAW', timeRemaining: 1000 },
  { name: 'END', timeRemaining: 1000 },
];

function buildTurn() {
  let turnList = new CircularLinkedList();

  PHASES.forEach((phase) => {
    turnList.append(phase);
  });

  return turnList;
}

export const TURN = buildTurn();
