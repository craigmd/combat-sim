import Card from '../Card/Card.model';
import testImg from '../assets/card-images/test.jpg';
import { CARD_TYPES } from './card.constants';

export const robotTest = new Card(
  '1',
  'Robot',
  '3',
  testImg,
  'Attack the enemy with the least Durability',
  CARD_TYPES.ROBOT,
  6,
  7
);
