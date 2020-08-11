import Card from '../Card/Card.model';
import testImg from '../assets/card-images/test.jpg';

import { CARD_TYPES } from './card.constants';

export const abilityTest = new Card(
  '2',
  'Ability',
  '2',
  testImg,
  'Dodge an attack. Cooldown 3',
  CARD_TYPES.ABILITY
);
