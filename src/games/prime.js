import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

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

const generateRound = () => {
  const numberForQuestion = getRandomNumber(1, 100);
  const question = numberForQuestion;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => runEngineGame(gameDescription, generateRound);

export default runPrimeGame;
