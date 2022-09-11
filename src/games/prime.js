import getRandomNumber from '../random.js';
import { runEngineGame, roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRounds = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const question = number;
    const round = [question, correctAnswer];
    rounds.push(round);
  }

  return rounds;
};

const runPrimeGame = () => {
  const gameResults = generateRounds();
  return runEngineGame(gameDescription, gameResults);
};

export default runPrimeGame;
