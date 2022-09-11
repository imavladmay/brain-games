import getRandomNumber from '../random.js';
import { runEngineGame, roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const round = [question, correctAnswer];
    rounds.push(round);
  }

  return rounds;
};

const runEvenGame = () => {
  const gameResults = generateRounds();
  return runEngineGame(gameDescription, gameResults);
};

export default runEvenGame;
