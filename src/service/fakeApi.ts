import { dataSets } from '../data/data';
import { Game } from '../common/interfaces';

export const getData = () => {
  const wordSet = dataSets[Math.floor(Math.random() * dataSets.length)];
  return new Promise<Game>((resolve, reject) => {
    setTimeout(() => {
      resolve(wordSet);
    }, 1000);
  });
};
