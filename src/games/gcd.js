import getRandomNumber from '../random.js';
import runEngineGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minNumber = 0;
const maxNumber = 100;

const getGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGCD(secondNumber, firstNumber % secondNumber);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(minNumber, maxNumber);
  const secondNumber = getRandomNumber(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const runGCDGame = () => runEngineGame(gameDescription, generateRound);

export default runGCDGame;
