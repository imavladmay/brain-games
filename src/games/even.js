import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => runEngineGame(gameDescription, generateRound);

export default runEvenGame;
